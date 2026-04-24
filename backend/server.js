const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [
  { name: "John" },
  { name: "Alice" }
];

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST user
app.post("/users", (req, res) => {
  const { name } = req.body;
  users.push({ name });
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});