// Stats.jsx — Admin panel stats editor (fully wired to MongoDB)
import { useState, useEffect } from "react";
import styles from "./Stats.module.css";
import { updateMetrics } from "../../../services/adminServices/adminApi";
import { getMetrics } from "../../../services/publicServices/metricsApi";

// ── Section / field definitions ───────────────────────────────────────────────
const SECTIONS = {
  stream: {
    label: "Stream Selection",
    service: "SERVICE - 1",
    color: "#6C63FF",
    fields: [
      { key: "ignite_enrollment",            label: "Ignite — Enrollment" },
      { key: "propel_enrollment",            label: "Propel — Enrollment" },
      { key: "accelerate_enrollment",        label: "Accelerate — Enrollment" },
      { key: "stream_ignite_to_propel",      label: "Upgrade % · Ignite → Propel" },
      { key: "stream_propel_to_accelerate",  label: "Upgrade % · Propel → Accelerate" },
    ],
  },
  career: {
    label: "Career Coaching",
    service: "SERVICE - 2",
    color: "#F59E0B",
    fields: [
      { key: "career_ignite_enrollment",      label: "Ignite — Enrollment" },
      { key: "career_propel_enrollment",      label: "Propel — Enrollment" },
      { key: "career_accelerate_enrollment",  label: "Accelerate — Enrollment" },
      { key: "career_captains_enrollment",    label: "Captains Club — Enrollment" },
      { key: "career_ignite_to_propel",       label: "Upgrade % · Ignite → Propel" },
      { key: "career_propel_to_accelerate",   label: "Upgrade % · Propel → Accelerate" },
      { key: "career_accelerate_to_captains", label: "Upgrade % · Accelerate → Captains" },
    ],
  },
  abroad: {
    label: "Study Abroad",
    service: "SERVICE - 3",
    color: "#10B981",
    fields: [
      { key: "abroad_enrolled",         label: "Students Enrolled" },
      { key: "abroad_applications",     label: "Applications Submitted" },
      { key: "abroad_visa_submissions", label: "Visa Files Submitted" },
      { key: "abroad_visa_approvals",   label: "Visa Approvals" },
      { key: "abroad_visa_rejections",  label: "Visa Rejections" },
    ],
  },
};

function calcSuccessRate(values) {
  const approvals   = Number(values.abroad_visa_approvals)   || 0;
  const submissions = Number(values.abroad_visa_submissions) || 0;
  if (!submissions) return "—";
  return ((approvals / submissions) * 100).toFixed(1) + "%";
}

export default function Stats() {
  const [activeTab, setActiveTab] = useState("stream");
  const [values,    setValues]    = useState({});
  const [loading,   setLoading]   = useState(true);
  const [saving,    setSaving]    = useState(false);
  const [saved,     setSaved]     = useState(false);
  const [dirty,     setDirty]     = useState(false);
  const [errors,    setErrors]    = useState({});
  const [fetchErr,  setFetchErr]  = useState(null);
  const [saveErr,   setSaveErr]   = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getMetrics();
        const doc = res.data.data || {};

       
        const loaded = {};
        Object.values(SECTIONS).forEach((sec) =>
          sec.fields.forEach((f) => {
            loaded[f.key] = doc[f.key] ?? 0;
          })
        );
        setValues(loaded);
        setFetchErr(null);
      } catch (err) {
        console.error("[Stats] load failed", err);
        setFetchErr("Failed to load metrics. Check your connection.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const validate = (key, raw) => {
    const num = Number(raw);
    if (raw === "" || isNaN(num) || num < 0) return "Must be a positive number";
    if (key.includes("_to_") && num > 100)   return "Percentage can't exceed 100";
    return null;
  };

  const handleChange = (key, raw) => {
    setValues((v) => ({ ...v, [key]: raw }));
    setDirty(true);
    setSaved(false);
    setSaveErr(null);
    setErrors((e) => ({ ...e, [key]: validate(key, raw) }));
  };


  const handleSave = async () => {
    const newErrors = {};
    let hasError = false;
    SECTIONS[activeTab].fields.forEach((f) => {
      const err = validate(f.key, values[f.key] ?? 0);
      if (err) { newErrors[f.key] = err; hasError = true; }
    });
    if (hasError) {
      setErrors((e) => ({ ...e, ...newErrors }));
      return;
    }

    setSaving(true);
    setSaveErr(null);

    try {
      const payload = {};
      Object.entries(values).forEach(([k, v]) => {
        payload[k] = Number(v);
      });

      console.log(payload)

      await updateMetrics(payload); // PATCH /api/metrics

      setSaved(true);
      setDirty(false);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error("[Stats] save failed", err);
      setSaveErr("Save failed. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const section     = SECTIONS[activeTab];
  const accentColor = section.color;

  if (loading) {
    return (
      <div className={styles.panel}>
        <div className={styles.stateBox}>
          <span className={styles.spinner} />
          Loading metrics…
        </div>
      </div>
    );
  }

  if (fetchErr) {
    return (
      <div className={styles.panel}>
        <div className={styles.stateBox}>
          <span className={styles.errorIcon}>⚠</span>
          {fetchErr}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>

      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>Metrics Manager</h2>
          <p className={styles.sub}>Edit live stats shown on the public Impact page</p>
        </div>
        {dirty && <span className={styles.unsavedBadge}>Unsaved changes</span>}
      </div>

   
      <div className={styles.tabs}>
        {Object.entries(SECTIONS).map(([key, sec]) => (
          <button
            key={key}
            className={`${styles.tab} ${activeTab === key ? styles.tabActive : ""}`}
            style={activeTab === key ? { "--accent": sec.color } : {}}
            onClick={() => setActiveTab(key)}
          >
            <span className={styles.tabService}>{sec.service}</span>
            {sec.label}
          </button>
        ))}
      </div>


      <div className={styles.body} style={{ "--accent": accentColor }}>
        <div className={styles.sectionMeta}>
          <span
            className={styles.serviceTag}
            style={{ background: accentColor + "1A", color: accentColor }}
          >
            {section.service}
          </span>
          <h3 className={styles.sectionTitle}>{section.label}</h3>
        </div>

        <div className={styles.grid}>
          {section.fields.map((f) => {
            const isUpgrade = f.key.includes("_to_");
            return (
              <div
                key={f.key}
                className={`${styles.field} ${isUpgrade ? styles.fieldUpgrade : ""}`}
              >
                <label className={styles.label}>
                  {f.label}
                  {isUpgrade && <span className={styles.pctHint}>%</span>}
                </label>
                <div className={styles.inputWrap}>
                  <input
                    type="number"
                    min="0"
                    max={isUpgrade ? 100 : undefined}
                    step={isUpgrade ? 0.1 : 1}
                    value={values[f.key] ?? 0}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                    className={`${styles.input} ${errors[f.key] ? styles.inputError : ""}`}
                    style={{ "--accent": accentColor }}
                  />
                  {isUpgrade && <span className={styles.inputSuffix}>%</span>}
                </div>
                {errors[f.key] && (
                  <span className={styles.errorMsg}>{errors[f.key]}</span>
                )}
              </div>
            );
          })}

          {activeTab === "abroad" && (
            <div className={`${styles.field} ${styles.fieldReadOnly}`}>
              <label className={styles.label}>
                Success Rate
                <span className={styles.autoTag}>Auto-calculated</span>
              </label>
              <div className={styles.readOnlyValue}>{calcSuccessRate(values)}</div>
              <span className={styles.readOnlyHint}>
                Approvals ÷ Visa Submissions × 100
              </span>
            </div>
          )}
        </div>


        <div className={styles.saveBar}>
          <button
            className={`${styles.saveBtn} ${saved ? styles.saveBtnSuccess : ""}`}
            style={{ "--accent": accentColor }}
            onClick={handleSave}
            disabled={saving || saved}
          >
            {saving ? "Saving…" : saved ? "✓ Saved" : "Save Changes"}
          </button>
          {saved && (
            <span className={styles.savedHint}>
              Public page will reflect these numbers immediately
            </span>
          )}
          {saveErr && <span className={styles.saveErrMsg}>{saveErr}</span>}
        </div>
      </div>
    </div>
  );
}