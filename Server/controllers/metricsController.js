const metrics = require("../models/metrics");

// ── Allowed keys (whitelist — never let arbitrary keys reach the DB) ─────────
const ALLOWED_KEYS = new Set([
  "ignite_enrollment",
  "propel_enrollment",
  "accelerate_enrollment",
  "stream_ignite_to_propel",
  "stream_propel_to_accelerate",

  "career_ignite_enrollment",
  "career_propel_enrollment",
  "career_accelerate_enrollment",
  "career_captains_enrollment",
  "career_ignite_to_propel",
  "career_propel_to_accelerate",
  "career_accelerate_to_captains",

  "abroad_enrolled",
  "abroad_applications",
  "abroad_visa_submissions",
  "abroad_visa_approvals",
  "abroad_visa_rejections",
]);

function sanitize(body) {
  const clean = {};
  for (const [key, val] of Object.entries(body)) {
    if (!ALLOWED_KEYS.has(key)) continue;

    const num = Number(val);
    if (isNaN(num) || num < 0) continue;

    clean[key] = num;
  }
  return clean;
}

// ── GET /api/metrics ─────────────────────────────────────────────────────────
const getMetrics = async (req, res) => {
  try {
    const doc = await metrics.findByIdOrCreate();
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error("[getMetrics]", err);
    res.status(500).json({
      success: false,
      message: "Could not fetch metrics",
    });
  }
};

// ── PATCH /api/metrics ───────────────────────────────────────────────────────
const updateMetrics = async (req, res) => {
  try {
    const updates = sanitize(req.body);

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields to update",
      });
    }

    const doc = await metrics.findByIdAndUpdate(
      "metrics",
      { $set: updates },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    res.json({ success: true, data: doc });
  } catch (err) {
    console.error("[updateMetrics]", err);
    res.status(500).json({
      success: false,
      message: "Could not update metrics",
    });
  }
};

// ── Helper: findById or create with defaults ─────────────────────────────────
metrics.findByIdOrCreate = async function () {
  let doc = await this.findById("metrics");

  if (!doc) {
    doc = await this.create({ _id: "metrics" });
  }

  return doc;
};

// ✅ COMMONJS EXPORT (IMPORTANT FIX)
module.exports = {
  getMetrics,
  updateMetrics,
};