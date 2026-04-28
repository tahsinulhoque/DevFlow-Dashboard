import { useEffect, useState } from "react";

// 👉 .env থেকে API URL নিচ্ছে
const API_BASE = import.meta.env.VITE_API_URL;

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // 🔹 users load
  const loadUsers = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error loading users:", err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // 🔹 add user
  const handleAdd = async () => {
    if (!name) return;

    try {
      await fetch(`${API_BASE}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      setName("");
      loadUsers(); // reload list
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}