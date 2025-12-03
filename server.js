const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors"); // 👈 ADD THIS

dotenv.config();

const app = express();

// CORS middleware (allow frontend to access backend)
app.use(cors());


// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// User routes
app.use("/api/users", userRoutes);

// Auth routes
app.use("/api/auth", authRoutes);

// 404 fallback (keep last)
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
