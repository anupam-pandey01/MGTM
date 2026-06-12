const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mgtm/blogs",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const blogUpload = multer({ storage });


module.exports = blogUpload;