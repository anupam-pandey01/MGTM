const transporter = require("../config/email.config");
const Message = require("../models/message");
const { messageSchema } = require("../validators/messageValidators");

const createMessage = async (req, res) => {
  try {
    const { error, value } = messageSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    const {
      inquiryType,
      name,
      organizationName,
      serviceName,
      email,
      phone,
      message,
      fax_number,
    } = value;

    // Honeypot protection
    if (fax_number) {
      return res.status(200).json({
        success: true,
        message: "Message sent!",
      });
    }

    await Message.create({
      inquiryType,
      name,
      organizationName,
      serviceName,
      email,
      phone,
      message,
    });

    let recipient = "info@mgtmconsultancy.com";

    switch (inquiryType?.toLowerCase()) {
      case "partnership":
        recipient = "partnership@mgtmconsultancy.com";
        break;

      case "service":
        recipient = "info@mgtmconsultancy.com";
        break;

      default:
        recipient = "info@mgtmconsultancy.com";
    }

    try {
      await transporter.sendMail({
        from: `"MGTM Website" <${process.env.EMAIL_USER}>`,
        to: recipient,
        replyTo: email,
        subject: `New ${inquiryType || "General"} Inquiry`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head><meta charset="UTF-8" /></head>
          <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
          
            <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;background:#f5f5f5;">
              <tr>
                <td align="center">
                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e0e0e0;">
          
                    <!-- Header -->
                    <tr>
                      <td style="background:#1a1a1a;padding:24px 28px;">
                        <p style="margin:0;font-size:12px;color:#999999;letter-spacing:1px;text-transform:uppercase;">MGTM Consultancy LLP</p>
                        <h1 style="margin:6px 0 0;font-size:18px;color:#ffffff;font-weight:600;">New ${inquiryType || "General"} Inquiry</h1>
                      </td>
                    </tr>
          
                    <!-- Fields -->
                    <tr>
                      <td style="padding:24px 28px 8px;">
          
                        <table width="100%" cellpadding="0" cellspacing="0">
          
                          <tr>
                            <td style="padding:6px 0;font-size:13px;color:#888888;width:120px;vertical-align:top;">Name</td>
                            <td style="padding:6px 0;font-size:13px;color:#1a1a1a;font-weight:600;">${name}</td>
                          </tr>
          
                          <tr>
                            <td style="padding:6px 0;font-size:13px;color:#888888;vertical-align:top;">Email</td>
                            <td style="padding:6px 0;font-size:13px;">
                              <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>
                            </td>
                          </tr>
          
                          <tr>
                            <td style="padding:6px 0;font-size:13px;color:#888888;vertical-align:top;">Phone</td>
                            <td style="padding:6px 0;font-size:13px;color:#1a1a1a;">+91 ${phone}</td>
                          </tr>
          
                          ${
                            organizationName
                              ? `
                          <tr>
                            <td style="padding:6px 0;font-size:13px;color:#888888;vertical-align:top;">Organization </td>
                            <td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${organizationName}</td>
                          </tr>`
                              : ""
                          }
          
                          ${
                            serviceName
                              ? `
                          <tr>
                            <td style="padding:6px 0;font-size:13px;color:#888888;vertical-align:top;">Service </td>
                            <td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${serviceName}</td>
                          </tr>`
                              : ""
                          }
          
                        </table>
          
                      </td>
                    </tr>
          
                    <!-- Divider -->
                    <tr>
                      <td style="padding:8px 28px;">
                        <hr style="border:none;border-top:1px solid #eeeeee;margin:0;" />
                      </td>
                    </tr>
          
                    <!-- Message -->
                    <tr>
                      <td style="padding:8px 28px 24px;">
                        <p style="margin:0 0 8px;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;">Message</p>
                        <p style="margin:0;font-size:14px;color:#333333;line-height:1.7;white-space:pre-wrap;">${message}</p>
                      </td>
                    </tr>
          
                    <!-- Footer -->
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
    } catch (err) {
      console.error("Email sending failed:", err);
    }

    return res.status(201).json({
      success: true,
      message: "We will contact you within 24 hours.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createMessage,
  getAllMessages,
};
