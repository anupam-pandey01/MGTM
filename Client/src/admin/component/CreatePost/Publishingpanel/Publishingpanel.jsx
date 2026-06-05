import styles from "./PublishingPanel.module.css";

const AUTHORS = [
  "MGTM Team",
  "Anupam Pandey",
  "Admin",
];

export default function PublishingPanel({
  status,
  author,
  publishedAt,
  featured,

  onStatusChange,
  onAuthorChange,
  onPublishedAtChange,
  onFeaturedChange,

  onSave,
  onPreview,
  onDiscard,
}) {
  return (
    <div className={styles.panel}>
      <h3 className={styles.panelTitle}>Publishing</h3>

      {/* Status */}
      <div className={styles.field}>
        <div className={styles.statusRow}>
          <span className={styles.fieldLabel}>Status</span>

          <div className={styles.toggleWrap}>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={status === "Published"}
                onChange={(e) =>
                  onStatusChange(
                    e.target.checked
                      ? "Published"
                      : "Draft"
                  )
                }
              />
              <span className={styles.slider} />
            </label>

            <span
              className={`${styles.statusLabel} ${
                status === "Published"
                  ? styles.live
                  : styles.draft
              }`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Author */}
      <div className={styles.field}>
        <label className={styles.fieldLabel}>
          AUTHOR
        </label>

        <select
          className={styles.select}
          value={author}
          onChange={(e) =>
            onAuthorChange(e.target.value)
          }
        >
          {AUTHORS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Publish Date */}
      <div className={styles.field}>
        <label className={styles.fieldLabel}>
          PUBLISH DATE
        </label>

        <input
          type="date"
          className={styles.dateInput}
          value={
            publishedAt
              ? new Date(publishedAt)
                  .toISOString()
                  .split("T")[0]
              : ""
          }
          onChange={(e) =>
            onPublishedAtChange(e.target.value)
          }
        />
      </div>

      {/* Featured Blog */}
      <div className={styles.field}>
        <div className={styles.statusRow}>
          <span className={styles.fieldLabel}>
            Featured Blog
          </span>

          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) =>
                onFeaturedChange(
                  e.target.checked
                )
              }
            />
            <span className={styles.slider} />
          </label>
        </div>
      </div>

      <button
        className={styles.saveBtn}
        type="button"
        onClick={onSave}
      >
        Save Post
      </button>

      <div className={styles.actionRow}>
        <button
          className={styles.previewBtn}
          type="button"
          onClick={onPreview}
        >
          Preview
        </button>

        <button
          className={styles.discardBtn}
          type="button"
          onClick={onDiscard}
        >
          Discard
        </button>
      </div>
    </div>
  );
}