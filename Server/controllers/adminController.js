const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const ExcelJS = require("exceljs");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const Purchase = require("../models/purchase");
const User = require("../models/user");
const Message = require("../models/message");
const Service = require("../models/service");
const Blog = require("../models/blog");
const crypto = require("crypto");
const transporter = require("../config/email.config");

const logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const accessToken = generateAccessToken(admin);
    const refreshToken = generateRefreshToken(admin);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      accessToken,
      userId: admin._id,
      message: "Login successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "Token is missing",
      });
    }

    jwt.verify(token, process.env.REFRESH_JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Invalid refresh token",
        });
      }

      const newAccessToken = generateAccessToken({
        _id: decoded._id,
        email: decoded.email,
      });

      res.status(200).json({
        success: true,
        message: "Access token refreshed successfully",
        accessToken: newAccessToken,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong", success: false });
  }
};

const generatePassword = () => {
  return String(crypto.randomInt(100000, 999999));
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email?.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const admin = await Admin.findOne({ email: email.trim() });

    if (!admin) {
      return res.status(200).json({
        success: true,
        message: "If that email is registered, a new password has been sent.",
      });
    }

    const newPassword = generatePassword();
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await transporter.sendMail({
      from: `"MGTM Admin" <${process.env.EMAIL_USER}>`,
      to: admin.email,
      subject: "Your New Admin Password — MGTM",
      html: `
            <!DOCTYPE html>
            <html lang="en">
            <head><meta charset="UTF-8" /></head>
            <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">

              <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;background:#f5f5f5;">
                <tr>
                  <td align="center">
                    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e0e0e0;">

                      <tr>
                        <td style="background:#1a1a1a;padding:24px 28px;">
                          <p style="margin:0;font-size:12px;color:#999999;letter-spacing:1px;text-transform:uppercase;">MGTM Consultancy LLP</p>
                          <h1 style="margin:6px 0 0;font-size:18px;color:#ffffff;font-weight:600;">Your New Password</h1>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:28px 28px 8px;">
                          <p style="margin:0 0 20px;font-size:14px;color:#333333;line-height:1.6;">
                            Hi ${admin.name || "Admin"}, here is your new password:
                          </p>

                          <!-- Password box -->
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="background:#f4f4f4;border:1px dashed #cccccc;border-radius:6px;padding:14px 20px;text-align:center;">
                                <span style="font-size:32px;font-weight:700;color:#1a1a1a;letter-spacing:8px;font-family:'Courier New',monospace;">
                                  ${newPassword}
                                </span>
                              </td>
                            </tr>
                          </table>

                          <p style="margin:20px 0 0;font-size:13px;color:#888888;line-height:1.6;">
                            Please log in and change this password immediately from your account settings.
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:8px 28px 24px;">
                          <p style="margin:0;font-size:12px;color:#aaaaaa;line-height:1.6;">
                            If you didn't request this, contact your system administrator immediately.
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td style="background:#f9f9f9;border-top:1px solid #eeeeee;padding:14px 28px;">
                          <p style="margin:0;font-size:11px;color:#aaaaaa;">
                            ${new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })} IST
                            &nbsp;·&nbsp; mgtmconsultancy.com
                          </p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>

            </body>
            </html>`,
    });

    admin.password = hashedPassword;
    await admin.save();

    return res.status(200).json({
      success: true,
      message: "If that email is registered, a new password has been sent.",
    });
  } catch (err) {
    console.error("Forgot password error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Something Went Wrong" });
  }
};

const adminDashboard = async (req, res) => {
  try {
    const totalStudent = await User.countDocuments();
    const totalService = await Service.countDocuments();
    const purchases = await Purchase.find({ paymentStatus: "paid" });
    const totalBlogs = await Blog.countDocuments();

    const totalAmount = purchases.reduce((sum, item) => sum + item.amount, 0);

    res.status(200).json({
      success: true,
      dashboard: {
        totalStudent,
        totalService,
        totalAmount,
        totalBlogs,
      },
    });
  } catch (err) {
    console.err(err);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const adminStudent = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 5;

    const { search = "", paymentStatus = "", service = "" } = req.query;

    const query = {};

    if (paymentStatus) {
      query.paymentStatus = paymentStatus;
    }

    const purchases = await Purchase.find(query)
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        match: search
          ? {
              $or: [
                {
                  name: {
                    $regex: search,
                    $options: "i",
                  },
                },
                {
                  email: {
                    $regex: search,
                    $options: "i",
                  },
                },
              ],
            }
          : {},
      })
      .populate("service")
      .populate("product");

    let filtered = purchases.filter((purchase) => purchase.user);

    if (service) {
      filtered = filtered.filter(
        (purchase) => purchase.service?.title === service,
      );
    }

    const totalPurchase = filtered.length;

    const paginatedPurchases = filtered.slice((page - 1) * limit, page * limit);

    const totalStudent = await User.countDocuments();

    res.status(200).json({
      purchase: paginatedPurchases,
      currentPage: page,
      totalPages: Math.ceil(totalPurchase / limit),
      totalPurchase,
      totalStudent,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const exportPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find()
      .populate("user")
      .populate("service")
      .populate("product");

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Mgtm Purchases");

    worksheet.columns = [
      { header: "Student Name", key: "name", width: 25 },
      { header: "Student Email", key: "email", width: 30 },
      { header: "Service", key: "service", width: 25 },
      { header: "Product", key: "product", width: 25 },
      { header: "Amount", key: "amount", width: 15 },
      { header: "Payment Status", key: "paymentStatus", width: 20 },
      { header: "Razorpay Order ID", key: "orderId", width: 30 },
    ];

    purchases.forEach((purchase) => {
      worksheet.addRow({
        name: purchase.user?.name,
        email: purchase.user?.email,
        service: purchase.service?.title,
        product: purchase.product?.title,
        amount: purchase.amount,
        paymentStatus: purchase.paymentStatus,
        orderId: purchase.razorpayOrderId,
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="purchases.xlsx"',
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Export failed" });
  }
};

module.exports = {
  loginAdmin,
  adminDashboard,
  refreshToken,
  adminStudent,
  exportPurchases,
  logout,
  forgotPassword,
};
