require("dotenv").config();

const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const Admin = require("./models/admin");

async function seedAdmin() {
  try {
    await connectDB();

    console.log("MongoDB Connected");

    // Remove existing admin
    await Admin.deleteMany({});

    console.log("Old admins removed");

    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    await Admin.create({
      email: process.env.ADMIN,
      password: hashedPassword,
    });

    console.log("Admin seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

seedAdmin();