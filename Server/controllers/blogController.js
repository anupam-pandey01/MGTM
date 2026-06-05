const Blog = require("../models/blog");
const cloudinary = require("../config/cloudinary");

const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      shortDescription,
      content,
      category,
      author,
      seoTitle,
      seoDescription,
      seoKeywords,
      status,
      featured,
      tags,
    } = req.body;

    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      await cloudinary.uploader.destroy(req.file.filename);

      return res.status(400).json({
        success: false,
        message: "Blog with this slug already exists",
      });
    }

    const plainText = content.replace(/<[^>]*>/g, "");
    const wordCount = plainText.trim().split(/\s+/).length;

    const readTime = Math.ceil(wordCount / 200);

    const blog = await Blog.create({
      title,
      slug,
      shortDescription,
      content,
      category,
      author,
      seoTitle,
      seoDescription,
      seoKeywords,
      tags,
      status,
      featured,
      readTime,
      publishedAt: status === "Published" ? new Date() : null,
      featuredImage: req.file
        ? {
            url: req.file.path,
            publicId: req.file.filename,
          }
        : undefined,
    });

    res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 5;
    
    console.log(page)
    const skip = (page - 1) * limit;

    const blogs = await Blog.find()
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);

    const allBlogs = await Blog.find({}, "views");
    const totalView = allBlogs.reduce(
      (sum, item) => sum + (item.views || 0),
      0,
    );

    const totalPages = Math.ceil(allBlogs.length / limit);

    const totalPublished = await Blog.countDocuments({ status: "Published" });
    const totalDraft = await Blog.countDocuments({ status: "Draft" });

    res.status(200).json({
      success: true,
      totalPublished,
      totalDraft,
      totalBlog: allBlogs.length,
      totalPages,
      totalView,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      shortDescription,
      content,
      category,
      author,
      seoTitle,
      seoDescription,
      seoKeywords,
      status,
      featured,
      tags,
    } = req.body;

    const plainText = content.replace(/<[^>]*>/g, "");
    const wordCount = plainText.trim().split(/\s+/).length;

    const updateData = {
      title,
      slug,
      shortDescription,
      content,
      category,
      author,
      seoTitle,
      seoDescription,
      seoKeywords,
      status,
      featured,
      tags,
      readTime: Math.ceil(wordCount / 200),
    };

    if (status === "Published") {
      updateData.publishedAt = new Date();
    }

    if (req.file) {
      updateData.featuredImage = {
        url: req.file.path,
        publicId: req.file.filename,
      };
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
