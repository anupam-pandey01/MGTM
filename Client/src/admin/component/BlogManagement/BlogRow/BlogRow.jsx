import { Pencil, Trash, Eye } from "lucide-react";
import styles from "./BlogRow.module.css"
import { Link } from "react-router";
import { useState } from "react";

const BlogRow = ({ blog, handleDelete }) => {
  const [loading, setLoading] = useState(false);

  return (
    <tr>
      <td className={styles.imgWrapper}>
        <img src={blog?.featuredImage?.url} alt="blog-img" /> {blog.title}
      </td>
      <td className={styles.tableFont}>{blog.author}</td>
      <td className={styles.tableFont}>{blog.category}</td>
      <td>{blog.status}</td>
      <td className={styles.tableFont}>{new Date(blog.createdAt).toLocaleDateString()}</td>

      <td>
        <div className="action-btn-icon">
          <Link className="icon" to={`/blog/${blog?.slug}`}>
            <Eye />
          </Link>

          <Link className="icon" to={`/admin/blogs/${blog._id}`}>
            <Pencil />
          </Link>

          <div className="icon" onClick={()=>{
            if(loading) return;  
            handleDelete(blog._id, setLoading);
          }}>
            {loading ? <strong>...</strong> : <Trash />}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BlogRow;