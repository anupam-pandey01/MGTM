const { getAllBlogs, getBlogBySlug } = require("../controllers/publicBlogController")

const blogRouter = require("express").Router()

blogRouter.get("/blogs", getAllBlogs);
blogRouter.get("/blog/:slug", getBlogBySlug);

module.exports = blogRouter