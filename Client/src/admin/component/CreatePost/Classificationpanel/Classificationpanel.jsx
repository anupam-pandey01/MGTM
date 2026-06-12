  import { useState } from "react";
  import styles from "./ClassificationPanel.module.css";

  const CATEGORIES = [
    "Education",
    "Learning",
    "Psychology",
    "Language Development",
    "Parenting",
    "Career Guidance",
    "Soft Skills",
    "Others",
  ];

  export default function ClassificationPanel({
    category,
    tags,
    onCategoryChange,
    onTagsChange,
  }) {
    const [tagInput, setTagInput] = useState("");

    const addTag = () => {
      const trimmed = tagInput.trim();

      if (trimmed && !tags.includes(trimmed)) {
        onTagsChange([...tags, trimmed]);
      }

      setTagInput("");
    };

    const removeTag = (tag) => {
      onTagsChange(tags.filter((t) => t !== tag));
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTag();
      }
    };

    return (
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Classification</h3>

        <div className={styles.field}>
          <label className={styles.fieldLabel}>CATEGORY</label>

          <select
            className={styles.select}
            value={category}
            onChange={(e) =>
              onCategoryChange(e.target.value)
            }
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel}>TAGS</label>

          <input
            className={styles.tagInput}
            type="text"
            placeholder="Add tag and press Enter..."
            value={tagInput}
            onChange={(e) =>
              setTagInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <div className={styles.tagList}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={styles.tag}
              >
                {tag}
                <button
                  type="button"
                  className={styles.tagRemove}
                  onClick={() => removeTag(tag)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }