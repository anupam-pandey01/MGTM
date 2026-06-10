import { useEffect, useState } from "react";
import styles from "./CreatePost.module.css";
import { validateBlog } from "../../../utils/validation/blogValidation";
import PostTitleInput from "../../component/CreatePost/Posttitleinput/Posttitleinput";
import ContentEditor from "../../component/CreatePost/ContentEditor/ContentEditor";
import FeaturedImage from "../../component/CreatePost/FeaturedImage/FeaturedImage";
import PublishingPanel from "../../component/CreatePost/PublishingPanel/PublishingPanel";
import ClassificationPanel from "../../component/CreatePost/ClassificationPanel/ClassificationPanel";
import SEOSettings from "../../component/CreatePost/SEOSettings/SEOSettings";
import {
  createBlog,
  getBlogById,
  updateBlog,
} from "../../../services/adminServices/adminApi";
import { useNavigate, useParams } from "react-router";
import { handleError, handleSuccess } from "../../../utils/handler";

const initialState = {
  title: "",
  slug: "",
  shortDescription: "",
  content: "",

  featuredImage: null,

  category: "Education",
  tags: [],

  author: "MGTM Team",

  readTime: 0,

  seoTitle: "",
  seoDescription: "",
  seoKeywords: [],

  status: "Draft",

  publishedAt: new Date().toISOString().split("T")[0],

  featured: false,
};

export default function CreatePost() {
  const [post, setPost] = useState(initialState);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const isEdit = !!id;

  const update = (key, value) => {
    setPost((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (!isEdit) return;

    const fetchBlog = async () => {
      const res = await getBlogById(id);

      setPost({
        ...res.blog,
        publishedAt: res.publishedAt
          ? new Date(res.publishedAt).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        featuredImage: {
          url: res.blog.featuredImage?.url,
        },
      });
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    const slug = post.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    setPost((prev) => ({
      ...prev,
      slug,
    }));
  }, [post.title]);

  const handleSave = async () => {
    const validationErrors = validateBlog(post, isEdit);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", post.title);
      formData.append("slug", post.slug);
      formData.append("shortDescription", post.shortDescription);
      formData.append("content", post.content);
      formData.append("category", post.category);
      formData.append("author", post.author);
      formData.append("status", post.status);
      formData.append("publishedAt", post.publishedAt);
      formData.append("featured", post.featured);

      formData.append("seoTitle", post.seoTitle);
      formData.append("seoDescription", post.seoDescription);
      formData.append("seoKeywords", JSON.stringify(post.seoKeywords));
      formData.append("tags", JSON.stringify(post.tags));

      if (post.featuredImage?.file) {
        formData.append("featuredImage", post.featuredImage.file);
      }

      let res;

      if (isEdit) {
        res = await updateBlog(id, formData);
      } else {
        res = await createBlog(formData);
      }

      if (res.success) {
        handleSuccess(
          isEdit ? "Blog updated successfully" : "Blog created successfully",
        );

        setSaved(true);
        navigate("/admin/blogs");
      }
    } catch (err) {
      console.error(err.response.data.message);
      handleError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDiscard = () => {
    if (window.confirm("Discard all changes?")) {
      setPost(initialState);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <h1 className={styles.pageTitle}>Create Post</h1>
      </div>

      <div className={styles.layout}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <div className={styles.card}>
            <PostTitleInput
              title={post.title}
              shortDescription={post.shortDescription}
              slug={post.slug}
              onTitleChange={(value) => update("title", value)}
              onDescriptionChange={(value) => update("shortDescription", value)}
            />

            {errors.title && <p className={styles.error}>{errors.title}</p>}

            {errors.shortDescription && (
              <p className={styles.error}>{errors.shortDescription}</p>
            )}
          </div>

          <div className={styles.card}>
            <ContentEditor
              value={post.content}
              onChange={(val) => update("content", val)}
            />
            {errors.content && <p className={styles.error}>{errors.content}</p>}
          </div>

          <div className={styles.card}>
            <FeaturedImage
              image={post.featuredImage}
              onChange={(val) => update("featuredImage", val)}
            />
            {errors.featuredImage && (
              <p className={styles.error}>{errors.featuredImage}</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <PublishingPanel
            status={post.status}
            author={post.author}
            publishedAt={post.publishedAt}
            featured={post.featured}
            onStatusChange={(value) => update("status", value)}
            onAuthorChange={(value) => update("author", value)}
            onPublishedAtChange={(value) => update("publishedAt", value)}
            onFeaturedChange={(value) => update("featured", value)}
            onSave={handleSave}
            onPreview={() => alert("Preview mode")}
            onDiscard={handleDiscard}
            loading={loading}
          />

          <ClassificationPanel
            category={post.category}
            tags={post.tags}
            onCategoryChange={(value) => update("category", value)}
            onTagsChange={(value) => update("tags", value)}
          />

          <SEOSettings
            seoTitle={post.seoTitle}
            seoDescription={post.seoDescription}
            seoKeywords={post.seoKeywords}
            onSeoTitleChange={(value) => update("seoTitle", value)}
            onSeoDescriptionChange={(value) => update("seoDescription", value)}
            onSeoKeywordsChange={(value) => update("seoKeywords", value)}
          />
        </div>
      </div>
    </div>
  );
}
