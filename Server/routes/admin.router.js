const { loginAdmin, adminDashboard, refreshToken, adminStudent, exportPurchases, logout, forgotPassword } = require("../controllers/adminController");
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require("../controllers/blogController");
const authAdmin = require("../middleware/authAdmin");
const blogUpload = require("../middleware/blogUpload");

const adminRouter = require("express").Router()

adminRouter.post("/login", loginAdmin);
adminRouter.post("/logout", logout);
adminRouter.post("/forget-password", forgotPassword)
adminRouter.get("/dashboard", authAdmin, adminDashboard);
adminRouter.get("/student",authAdmin, adminStudent);

adminRouter.post("/blog", blogUpload.single("featuredImage"), authAdmin, createBlog);
adminRouter.get("/blog", authAdmin, getAllBlogs);
adminRouter.get("/blog/:id", authAdmin, getBlogById);
adminRouter.put("/blog/:id", authAdmin, blogUpload.single("featuredImage"), updateBlog);
adminRouter.delete("/blog/:id", authAdmin, deleteBlog);

adminRouter.get("/purchases/export", authAdmin, exportPurchases);
adminRouter.get("/refresh-token", refreshToken);




module.exports = adminRouter;