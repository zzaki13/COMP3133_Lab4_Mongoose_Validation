// Zaki Mohammed - 101507934

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({ message: "Lab 04 server is running" });
});

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      data: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Validation failed",
      error: error.message,
    });
  }
});

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
