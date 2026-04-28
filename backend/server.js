const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// API base (optional)
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
  res.json(users);
});

// ✅ POST user
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  users.push({ name });
  res.json({ success: true });
});

// start server
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});