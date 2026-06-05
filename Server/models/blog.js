const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    shortDescription: {
      type: String,
      required: true,
      maxlength: 250,
    },

    content: {
      type: String,
      required: true,
    },

    featuredImage: {
      url: String,
      publicId: String,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Education",
        "Learning",
        "Psychology",
        "Language Development",
        "Parenting",
        "Career Guidance",
        "Soft Skills",
        "Others",
      ],
    },

    tags: [String],

    author: {
      type: String,
      default: "MGTM Team",
    },

    readTime: {
      type: Number, // minutes
    },

    seoTitle: String,

    seoDescription: String,

    seoKeywords: [String],

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },

    publishedAt: Date,

    views: {
      type: Number,
      default: 0,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog