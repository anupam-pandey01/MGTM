// models/Metrics.model.js

const mongoose = require("mongoose");

const MetricsSchema = new mongoose.Schema(
  {
    // Singleton document
    _id: { type: String, default: "metrics" },

    // ── SERVICE 1 · Stream Selection ─────────────────────────────────────
    ignite_enrollment: { type: Number, default: 0 },
    propel_enrollment: { type: Number, default: 0 },
    accelerate_enrollment: { type: Number, default: 0 },
    stream_ignite_to_propel: { type: Number, default: 0 },
    stream_propel_to_accelerate: { type: Number, default: 0 },

    // ── SERVICE 2 · Career Coaching ──────────────────────────────────────
    career_ignite_enrollment: { type: Number, default: 0 },
    career_propel_enrollment: { type: Number, default: 0 },
    career_accelerate_enrollment: { type: Number, default: 0 },
    career_captains_enrollment: { type: Number, default: 0 },
    career_ignite_to_propel: { type: Number, default: 0 },
    career_propel_to_accelerate: { type: Number, default: 0 },
    career_accelerate_to_captains: { type: Number, default: 0 },

    // ── SERVICE 3 · Study Abroad ─────────────────────────────────────────
    abroad_enrolled: { type: Number, default: 0 },
    abroad_applications: { type: Number, default: 0 },
    abroad_visa_submissions: { type: Number, default: 0 },
    abroad_visa_approvals: { type: Number, default: 0 },
    abroad_visa_rejections: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    _id: false,
  }
);

// ── Virtual: success rate (NOT stored in DB) ───────────────────────────────
MetricsSchema.virtual("abroad_success_rate").get(function () {
  if (!this.abroad_visa_submissions) return 0;

  return +(
    (this.abroad_visa_approvals / this.abroad_visa_submissions) *
    100
  ).toFixed(1);
});

// Include virtuals in API response
MetricsSchema.set("toJSON", { virtuals: true });
MetricsSchema.set("toObject", { virtuals: true });

// ✅ COMMONJS EXPORT
module.exports = mongoose.model("Metrics", MetricsSchema);