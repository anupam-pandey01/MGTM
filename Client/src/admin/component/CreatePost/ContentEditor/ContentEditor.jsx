import { useMemo, useRef } from "react";
import JoditEditor from "jodit-react";
import styles from "./ContentEditor.module.css";

export default function ContentEditor({ value, onChange }) {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write your blog content here...",
      height: 500,
      toolbarSticky: false,

      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "ul",
        "ol",
        "|",
        "font",
        "fontsize",
        "paragraph",
        "|",
        "image",
        "link",
        "table",
        "|",
        "align",
        "|",
        "undo",
        "redo",
        "|",
        "hr",
        "fullsize",
      ],
    }),
    [],
  );

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>CONTENT</label>

      <div className={styles.editorWrapper}>
        <JoditEditor
          ref={editor}
          value={value}
          config={config}
          onChange={(newContent) => onChange(newContent)}
        />
      </div>
    </div>
  );
}
