import { useEffect, useState } from "react";
import styles from "./PostTitleInput.module.css";

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function PostTitleInput({
  title,
  shortDescription,
  slug,
  onTitleChange,
  onDescriptionChange,
}) {
  // const [slug, setSlug] = useState("url-slug-here");

  // useEffect(() => {
  //   if (title) {
  //     setSlug(toSlug(title));
  //   } else {
  //     setSlug("url-slug-here");
  //   }
  // }, [title]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>POST TITLE</label>

      <input
        className={styles.titleInput}
        type="text"
        placeholder="Enter post title..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />

      <div className={styles.slugRow}>
        <span className={styles.linkIcon}>⌘</span>
        <span className={styles.baseUrl}>mgtm.com/blogs/</span>
        <span className={styles.slug}>{slug}</span>
      </div>

      <label className={styles.label}>Short Description</label>

      <textarea
        rows="5"
        className={styles.shortDescription}
        placeholder="Enter short description..."
        value={shortDescription}
        onChange={(e) => onDescriptionChange(e.target.value)}
      />
    </div>
  );
}