const mongoose = require("mongoose");
const Service = require("./models/service");
const Product = require("./models/product");
const connectDB = require("./config/db");
require("dotenv").config()

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // Clean old data (optional)
    // await Service.deleteOne({ slug: "study-abroad" });
    // await Product.deleteMany({});

    // 1. Create Service
    const service = await Service.findOne({slug: "study-abroad"});

    // 2. Create Product (ONLY REQUIRED DATA)
    const product = await Product.create({
      title: "Study Abroad Package",
      slug: "study-abroad-package",
      service: service._id,
      pricing: {
        type: "fixed",
        price: 6000,
      },
    });

    console.log("Service ID:", service._id);
    console.log("Product ID:", product._id);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();