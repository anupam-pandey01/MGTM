export const validateBlog = (post, isEdit = false) => {
  const errors = {};

  // Title
  if (!post.title?.trim()) {
    errors.title = "Title is required";
  } else if (post.title.trim().length < 5) {
    errors.title = "Title must be at least 5 characters";
  }

  // Slug
  if (!post.slug?.trim()) {
    errors.slug = "Slug is required";
  }

  // Short Description
  if (!post.shortDescription?.trim()) {
    errors.shortDescription = "Short description is required";
  } else if (post.shortDescription.length > 250) {
    errors.shortDescription =
      "Short description cannot exceed 250 characters";
  }

  // Content
  const plainText = post.content
    ?.replace(/<[^>]*>/g, "")
    .trim();

  if (!plainText) {
    errors.content = "Content is required";
  } else if (plainText.length < 20) {
    errors.content =
      "Content should contain at least 20 characters";
  }

  // Category
  if (!post.category) {
    errors.category = "Category is required";
  }

  // Featured Image
  if (!isEdit && !post.featuredImage) {
    errors.featuredImage = "Featured image is required";
  }

  // SEO Title
  if (post.seoTitle && post.seoTitle.length > 60) {
    errors.seoTitle =
      "SEO title should be under 60 characters";
  }

  // SEO Description
  if (post.seoDescription && post.seoDescription.length > 160) {
    errors.seoDescription =
      "SEO description should be under 160 characters";
  }

  return errors;
};