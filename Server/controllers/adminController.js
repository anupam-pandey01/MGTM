const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const ExcelJS = require("exceljs");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const Purchase = require("../models/purchase");
const User = require("../models/user");
const Message = require("../models/message");
const Service = require("../models/service");

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
      message: "Server Error",
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
      message: "Server Error",
    });
  }
};

const refreshToken = async (req, res) => {
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
};

const adminDashboard = async (req, res) => {
  try {
    const totalStudent = await User.countDocuments();
    const totalService = await Service.countDocuments();
    const purchases = await Purchase.find({});

    const totalAmount = purchases.reduce((sum, item) => sum + item.amount, 0);


    res.status(200).json({
      success: true,
      dashboard: {
        totalStudent,
        totalService,
        totalAmount
      },
    });
  } catch (err) {
    console.err(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
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
      message: "Server Error",
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
};
