"use client";

import { useState } from "react";

function PostForm({ onPostAdded }: { onPostAdded: () => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Post created!");
        setTitle("");
        setContent("");
        onPostAdded();
      } else {
        setMessage(data.error || "Error creating post.");
      }
    } catch {
      setMessage("Error creating post.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 mb-8 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Create a Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-3"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-3"
        required
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full font-semibold"
      >
        Add Post
      </button>
      {message && (
        <div className="text-center text-sm mt-3 text-green-600">{message}</div>
      )}
    </form>
  );
}
export default PostForm;
