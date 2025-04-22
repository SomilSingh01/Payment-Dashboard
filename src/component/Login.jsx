import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple auth check (you can improve it later)
    if (username === "ProPeak" && password === "123456789") {
      onLogin();
      navigate("/");
    } else {
      alert("Invalid credentials. Try admin/admin.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-xl w-80"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
