import { useState } from "react";

function App() {
  const [users, setUsers] = useState(["John", "Alice"]);
  const [name, setName] = useState("");

  const addUser = () => {
    if (name.trim() === "") return;
    setUsers([...users, name]);
    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevFlow Dashboard</h1>

      <h2>Users</h2>

      {/* ✅ Total user count line */}
      <p>
        <strong>Total users:</strong> {users.length}
      </p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;