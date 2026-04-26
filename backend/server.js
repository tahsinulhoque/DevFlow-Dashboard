const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test root
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// API base
app.get("/api", (req, res) => {
  res.send("API working 🚀");
});

let users = [
  { name: "John" },
  { name: "Alice" }
];

// GET users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST user
app.post("/api/users", (req, res) => {
  const { name } = req.body;
  users.push({ name });
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});