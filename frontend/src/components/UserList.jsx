import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const API_BASE = import.meta.env.DEV
    ? "http://localhost:5000"
    : "http://backend:5000";

  const loadUsers = async () => {
    try {
      const res = await fetch(`${API_BASE}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error loading users:", err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAdd = async () => {
    if (!name) return;

    try {
      await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      setName("");
      loadUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <div>
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