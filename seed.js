// Zaki Mohammed - 101507934

const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");
const users = require("./UsersData.json");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas (seed)");

    await User.deleteMany({});
    console.log("🧹 Cleared users collection");

    const result = await User.insertMany(users);
    console.log(`✅ Inserted ${result.length} users`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

seed();
