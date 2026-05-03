const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// API base
app.get("/api", (req, res) => {
  res.send("API working 🚀");
});

// in-memory data
let users = [
  { name: "John" },
  { name: "Alice" }
];

// ✅ GET users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// ✅ POST user
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }

  users.push({ name: name.trim() });

  res.status(201).json({
    success: true,
    users
  });
});

// ❌ fallback route (important for debugging)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// start server
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000 🚀");
});