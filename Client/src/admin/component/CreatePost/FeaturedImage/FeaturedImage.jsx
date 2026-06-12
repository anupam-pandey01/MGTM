import { useState, useRef } from "react";
import styles from "./FeaturedImage.module.css";

export default function FeaturedImage({ image, onChange }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    onChange({
      file,
      previewUrl: URL.createObjectURL(file),
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>FEATURED IMAGE</label>

      <div
        className={`${styles.dropZone} ${
          dragging ? styles.dragging : ""
        } ${image ? styles.hasImage : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => !image && inputRef.current?.click()}
      >
        {image ? (
          <div className={styles.previewWrapper}>
            <img
              src={image.previewUrl || image.url}
              alt="Featured"
              className={styles.previewImg}
            />

            <button
              type="button"
              className={styles.removeBtn}
              onClick={(e) => {
                e.stopPropagation();

                if (image?.previewUrl) {
                  URL.revokeObjectURL(image.previewUrl);
                }

                onChange(null);
              }}
            >
              ✕
            </button>
          </div>
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.iconWrap}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect
                  x="2"
                  y="5"
                  width="28"
                  height="22"
                  rx="3"
                  stroke="#b0b5c4"
                  strokeWidth="1.8"
                />
                <circle
                  cx="10.5"
                  cy="12.5"
                  r="2.5"
                  stroke="#b0b5c4"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 22l7.5-7 5 5 4-4 8 8"
                  stroke="#b0b5c4"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 9v6M19 12h6"
                  stroke="#b0b5c4"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className={styles.uploadText}>Upload Featured Image</p>

            <p className={styles.uploadHint}>
              Recommended size: 1920×1080px. Max 5MB.
            </p>

            <button
              className={styles.browseBtn}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
            >
              Browse Files
            </button>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>
    </div>
  );
}
