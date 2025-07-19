"use client";

import { useState } from "react";

function UserForm({ onUserAdded }: { onUserAdded: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("User created!");
        setName("");
        setEmail("");
        onUserAdded();
      } else {
        setMessage(data.error || "Error creating user.");
      }
    } catch {
      setMessage("Error creating user.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 mb-8 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-3"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-3"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-semibold"
      >
        Add User
      </button>
      {message && (
        <div className="text-center text-sm mt-3 text-green-600">{message}</div>
      )}
    </form>
  );
}

export default UserForm;
