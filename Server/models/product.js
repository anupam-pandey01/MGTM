const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
    },

    subtitle: {
      type: String,
      trim: true,
    },


    label: {
      type: String,
      // Example:
      // Product 1
      // Most Chosen
    },

    // Relation
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    // Pricing
    pricing: {
      type: {
        type: String,

        enum: [
          "free",
          "fixed",
          "session",
        ],

        required: true,
      },

    
      price: {
        type: Number,
      },

      // Session Pricing
      sessions: [
        {
          label: {
            type: String,
            // 1 Session
            // 3 Sessions
          },

          sessionCount: {
            type: Number,
          },

          price: {
            type: Number,
          },
        },
      ],
    },

    // Product Features
    features: [
      {
        title: {
          type: String,
          required: true,
        },

        description: {
          type: String,
          required: true,
        },
      },
    ],

    // UI
    buttonText: {
      type: String,
      default: "Enquire",
    },

    // Premium Card
    isPremium: {
      type: Boolean,
      default: false,
    },

    // Enrollment
    totalSeats: {
      type: Number,
      default: 0,
    },

    enrolledStudents: {
      type: Number,
      default: 0,
    },

    // Visibility
    isActive: {
      type: Boolean,
      default: true,
    },
  },

  { timestamps: true }
);

const Product = mongoose.model(
  "Product",
  productSchema
);

module.exports = Product;