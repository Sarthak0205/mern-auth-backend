const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

// ✅ TEMP: allow all origins (for dev & testing)
app.use(cors());

// If you want stricter later:
// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://YOUR_FRONTEND_URL.vercel.app",
// ];
// app.use(cors({ origin: allowedOrigins }));

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
