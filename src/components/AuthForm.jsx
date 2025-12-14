import React, { useState } from "react";
import "../App.css";

export default function AuthForm({ onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess({ username, password, token: "fake-token-123" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        maxWidth: 360,
        background: "#fff",
        padding: "24px 28px",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="search"
        />
      </div>

      <button
        className="btn"
        style={{ marginTop: 16, width: "100%" }}
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
