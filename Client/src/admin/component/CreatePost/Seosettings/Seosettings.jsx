import { useState } from "react";
import styles from "./SEOSettings.module.css";

export default function SEOSettings({
  seoTitle,
  seoDescription,
  seoKeywords,

  onSeoTitleChange,
  onSeoDescriptionChange,
  onSeoKeywordsChange,
}) {

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(seoKeywords?.join(", ") || "");

  return (
    <div className={styles.panel}>
      <button
        className={styles.header}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.panelTitle}>SEO Settings</span>

        <svg
          className={`${styles.chevron} ${open ? styles.open : ""}`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 5l4 4 4-4"
            stroke="#8a8f9e"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <div className={styles.body}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>SEO TITLE</label>

            <input
              className={styles.input}
              type="text"
              placeholder="SEO title..."
              value={seoTitle}
              onChange={(e) => onSeoTitleChange(e.target.value)}
            />

            <span className={styles.hint}>
              <span className={seoTitle.length > 60 ? styles.error: ""}>{seoTitle.length}/60 characters</span>
            </span>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>SEO DESCRIPTION</label>

            <textarea
              rows={4}
              className={styles.textarea}
              placeholder="SEO description..."
              value={seoDescription}
              onChange={(e) => onSeoDescriptionChange(e.target.value)}
            />

            <span className={styles.hint}>
              <span className={seoDescription.length > 160 ? styles.error : ""}>
                {seoDescription.length}/160 characters
              </span>
            </span>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>SEO KEYWORDS</label>

            <input
              className={styles.input}
              type="text"
              placeholder="education, learning, psychology"
              value={inputValue}
              onChange={(e) => {
                const val = e.target.value;

                setInputValue(val);

                onSeoKeywordsChange(
                  val
                    .split(",")
                    .map((k) => k.trim())
                    .filter(Boolean),
                );
              }}
            />
          </div>
        </div>
      ) : (
        <p className={styles.collapsedHint}>
          Search engine optimization settings are collapsed.
        </p>
      )}
    </div>
  );
}
