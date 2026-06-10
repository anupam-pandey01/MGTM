import { useEffect, useState } from "react";
import ArticleBody from "../../component/ui/BlogDetailedPage/Articlebody/Articlebody";
import ArticleHero from "../../component/ui/BlogDetailedPage/Articlehero/Articlehero";
import ArticleTags from "../../component/ui/BlogDetailedPage/Articletags/Articletags";
import RelatedInsights from "../../component/ui/BlogDetailedPage/Relatedinsights/Relatedinsights";
import styles from "./BlogDetailedPage.module.css";
import { useParams } from "react-router";
import { handleError } from "../../../utils/handler";
import { blogBySlug } from "../../../services/publicServices/blogApi";
import { Helmet } from "react-helmet-async";

const BlogDetailPage = () => {
  const [post, setPost] = useState({});
  const [relatedPosts, setRelatedPosts] = useState([]);

  const { slug } = useParams();
  useEffect(() => {
    async function slugBlog() {
      try {
        const data = await blogBySlug(slug);

        setPost(data.blog);
        setRelatedPosts(data.relatedBlogs);
      } catch (err) {
        console.log(err);
      }
    }

    slugBlog();
  }, [slug]);

  const {
    category,
    title,
    featuredImage,
    content,
    tags,
    author,
    createdAt,
    publishedAt,
    updatedAt,
  } = post;
  const description =
    post?.excerpt ||
    post?.metaDescription ||
    content?.replace(/<[^>]+>/g, "").slice(0, 155) ||
    "Read this article from MGTM Consultancy LLP.";

  const canonicalUrl = `https://www.mgtmconsultancy.com/blog/${slug}`;

  const imageUrl =
    featuredImage?.url || "https://www.mgtmconsultancy.com/og-blog.jpg";

  const publishedDate = publishedAt || createdAt;

  const modifiedDate = updatedAt || publishedDate;
  return (
    <>
      <Helmet>
        <title>
          {title
            ? `${title} | MGTM Consultancy LLP`
            : "Blog | MGTM Consultancy LLP"}
        </title>

        <meta name="description" content={description} />

        <meta name="robots" content="index,follow,max-image-preview:large" />

        <meta name="author" content={author || "MGTM Consultancy LLP"} />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={imageUrl} />

        <meta property="og:image:alt" content={title} />

        <meta property="og:type" content="article" />

        <meta property="article:published_time" content={publishedDate} />

        <meta property="article:modified_time" content={modifiedDate} />

        {tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={title} />

        <meta name="twitter:description" content={description} />

        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <main className={styles.page}>
        <ArticleHero
          category={category}
          title={title}
          author={author}
          createdAt={createdAt}
          publishedAt={publishedAt}
          heroImage={featuredImage?.url}
          updatedAt={updatedAt}
        />

        <ArticleBody content={content} />

        <div className={`${styles.tagsWrap} container`}>
          <ArticleTags tags={tags} />
        </div>

        <RelatedInsights posts={relatedPosts} />
      </main>
    </>
  );
};

export default BlogDetailPage;
