import { Pencil, Trash, Eye } from "lucide-react";
import styles from "./BlogRow.module.css"
import { Link } from "react-router";

const BlogRow = ({ blog, handleDelete }) => {
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
          <div className="icon">
            <Eye />
          </div>

          <Link className="icon" to={`/admin/blogs/${blog._id}`}>
            <Pencil />
          </Link>

          <div className="icon" onClick={()=> handleDelete(blog._id)}>
            <Trash />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BlogRow;