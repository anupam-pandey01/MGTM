import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import styles from "./BlogIndexPage.module.css";

import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import FilterTabs from "../../component/ui/BlogIndexPage/FilterTabs/FilterTabs";
import BlogGrid from "../../component/ui/BlogIndexPage/Bloggrid/Bloggrid";
import Pagination from "../../component/ui/BlogIndexPage/Pagination/Pagination";
// import NewsletterSection from "../../component/ui/BlogIndexPage/Newslettersection/Newslettersection";

import { handleError } from "../../../utils/handler";
import { blog } from "../../../services/publicServices/blogApi";

const BlogIndexPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        setLoading(true);

        const data = await blog(currentPage, activeTab);

        setPosts(data?.blogs || []);
        setTotalPages(data?.totalPages || 1);
      } catch (err) {
        console.log(err);
        handleError(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    getAllBlogs();
  }, [activeTab, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const canonicalUrl =
    currentPage > 1
      ? `https://www.mgtmconsultancy.com/blogs?page=${currentPage}`
      : "https://www.mgtmconsultancy.com/blogs";

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Career Guidance & Study Abroad Blog | MGTM Consultancy LLP
        </title>

        <meta
          name="description"
          content="Explore MGTM Consultancy LLP's latest blogs on career guidance, stream selection, psychometric assessments, scholarships, profile building, and study abroad insights."
        />

        <meta
          name="keywords"
          content="career guidance blog, study abroad blog India, stream selection advice, psychometric assessment articles, scholarships for students, overseas education blogs"
        />

        <meta
          name="robots"
          content={
            currentPage > 1
              ? "noindex,follow"
              : "index,follow,max-image-preview:large"
          }
        />

        <meta
          name="author"
          content="MGTM Consultancy LLP"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Career Guidance & Study Abroad Blog | MGTM Consultancy LLP"
        />

        <meta
          property="og:description"
          content="Expert insights and practical advice to help students and parents make informed education decisions."
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:image"
          content="https://www.mgtmconsultancy.com/og-blog-index.jpg"
        />

        <meta
          property="og:image:alt"
          content="MGTM Consultancy LLP Blogs"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="MGTM Consultancy LLP"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Career Guidance & Study Abroad Blog"
        />

        <meta
          name="twitter:description"
          content="Read the latest education insights from MGTM Consultancy LLP."
        />

        <meta
          name="twitter:image"
          content="https://www.mgtmconsultancy.com/og-blog-index.jpg"
        />

        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MGTM Consultancy LLP Blog",
            description:
              "Career guidance and study abroad resources for students and parents.",
            url: "https://www.mgtmconsultancy.com/blogs",
            publisher: {
              "@type": "EducationalOrganization",
              name: "MGTM Consultancy LLP",
              url: "https://www.mgtmconsultancy.com",
            },
          })}
        </script>

        {/* Blog List Schema */}
        {posts.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://www.mgtmconsultancy.com/blog/${post.slug}`,
                name: post.title,
              })),
            })}
          </script>
        )}
      </Helmet>

      <main className={styles.page}>
        <PageHeroSection
          eyeBrow={"MGTM BLOG"}
          pageHeroTitle={
            "Career Guidance & Study Abroad Articles"
          }
          pageHeroIntro={
            "Guiding students toward brighter futures through expert advice, study abroad updates, psychometric insights, and practical career guidance."
          }
        />

        <section className={styles.insightsSection}>
          <FilterTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className={`${styles.gridWrap} container`}>
            <BlogGrid
              posts={posts}
              loading={loading}
            />

            {!loading && posts.length === 0 && (
              <div className={styles.emptyState}>
                <p>
                  No articles found for this category.
                </p>
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </section>

        {/* <NewsletterSection /> */}
      </main>
    </>
  );
};

export default BlogIndexPage;