const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    body: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    ctaLabel: {
      type: String,
      default: "Explore Service",
    },

    order:{
      type: Number,
      default: 0
    },

    // Services page
    heroSection: {
      eyebrow: {
        type: String,
      },

      heading: {
        type: String,
      },

      description: {
        type: String,
      },

    },

    sections: [
      {
        type: {

          type: String,
          required: true

          // products
          // text
          // note
          // faq
          // cards
          // cta

        },
        data: mongoose.Schema.Types.Mixed
      }

    ],

  
    isActive: {
      type: Boolean,
      default: true,
    },
    
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;