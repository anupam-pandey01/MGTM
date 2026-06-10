// import BlogStats from "../BlogStats/BlogStats";
// import BlogTable from "../BlogTable/BlogTable";
import { Link } from "react-router";
import DataTable from "../../component/Common/DataTable/DataTable";
import Stats from "../../component/Common/StatsCard/Stats";
import styles from "./BlogManagement.module.css";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { AllBlog, deleteBlog } from "../../../services/adminServices/adminApi";
import BlogRow from "../../component/BlogManagement/BlogRow/BlogRow";
import Pagination from "../../component/Common/Pagination/Pagination";
import { handleError, handleSuccess } from "../../../utils/handler";

export default function BlogManagement() {
  const [blogData, setBlogData] = useState([]);
  const [page, setPage] = useState(1);


const handleDelete = async (id, setLoading) => {
 
  const confirmed = window.confirm(
    "Are you sure you want to delete this blog?"
  );

  if (!confirmed) return;

  try {
    setLoading(true);
    const res = await deleteBlog(id);

    if (res.success){
      const data = await AllBlog(page);
      setBlogData(data);
      handleSuccess(res.message);
    }else{
      handleError(res.message);
    }
  } catch (error) {
    console.error(error.response.data.message);
    handleError(error.response.data.message);
  }finally{
    setLoading(false);  
  }
};

  useEffect(() => {
    async function getAllBlogs() {
      try {
        const data = await AllBlog(page);
       
        setBlogData(data);
      } catch (err) {
        console.log(err);
      }
    }

    getAllBlogs();
  }, [page]);

  return (
    <section className={styles.blogManagement}>
      <div className={styles.header}>
        <div>
          <h1>Blog Management</h1>
          <p>Dashboard / Blogs</p>
        </div>

        <Link to={"/admin/blogs/create"}>
          <button className={styles.createBtn}>
            <Plus size={18} />
            Create New Post
          </button>
        </Link>
      </div>

      <Stats
        cards={[
          {
            title: "Total Posts",
            value: blogData.totalBlog || 0,
          },
          {
            title: "Published",
            value: blogData.totalPublished || 0,
          },
          {
            title: "Draft",
            value: blogData.totalDraft || 0,
          },
          {
            title: "Total Views",
            value: blogData.totalView || 0,
          },
        ]}
      />

      <div className={styles.allBlogWrapper}>
        <DataTable
          columns={[
            "Title",
            "Author",
            "Category",
            "Status",
            "Date Created",
            "Actions",
          ]}
          data={blogData.blogs || []}
          renderRow={(blog, index) => (
            <BlogRow blog={blog} key={index} handleDelete={handleDelete}/>
          )}
        />
        <div className={styles.tableFooter}>
          <Pagination 
            page={page}
            totalPage={blogData.totalPages}
            setPage={setPage}
          />
      </div>
      </div>
      
    </section>
  );
}
