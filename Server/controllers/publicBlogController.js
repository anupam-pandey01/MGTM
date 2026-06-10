const Blog = require("../models/blog");

const getAllBlogs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 6;

    const filter = {
      status: "Published",
    };

    if (req.query.category && req.query.category !== "all") {
      filter.category = req.query.category;
    }

    const totalBlogs = await Blog.countDocuments(filter);

    const blogs = await Blog.find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ publishedAt: -1 });

    res.status(200).json({
      success: true,
      blogs,
      currentPage: page,
      totalPages: Math.ceil(totalBlogs / limit),
      totalBlogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};




const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug is required",
      });
    }

    const blog = await Blog.findOne({
      slug,
      status: "Published",
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    let relatedBlogs = await Blog.find({
      category: blog.category,
      _id: { $ne: blog._id },
      status: "Published",
    })
      .sort({ createdAt: -1 })
      .limit(3);

    // Fallback if category doesn't have enough blogs
    if (relatedBlogs.length < 3) {
      const extraBlogs = await Blog.find({
        _id: {
          $nin: [blog._id, ...relatedBlogs.map((b) => b._id)],
        },
        status: "Published",
      }).sort({ createdAt: -1 })
        .limit(3 - relatedBlogs.length);

      relatedBlogs = [...relatedBlogs, ...extraBlogs];
    }

    return res.status(200).json({
      success: true,
      blog,
      relatedBlogs,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



module.exports = {
  getAllBlogs,
  getBlogBySlug
};