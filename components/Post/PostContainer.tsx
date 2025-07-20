"use client";

import { PostDocument } from "@/lib/models/post";
import { useEffect, useState } from "react";

function PostsContainer() {
  const [posts, setPosts] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch {
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">All Posts</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading posts...</div>
      ) : posts.length > 0 ? (
        <ul className="space-y-6">
          {posts.map((post: PostDocument) => (
            <li
              key={post._id as string}
              className="bg-gray-50 border rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-2">{post.content}</p>
              {/* <div className="text-sm text-gray-500">
                Posted by{" "}
                {typeof post.author === "object" && post.author !== null
                  ? post.author.name
                  : post.author
                  ? post.author
                  : "Unknown"}{" "}
                on{" "}
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString()
                  : ""}
              </div> */}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">No posts found.</div>
      )}
    </section>
  );
}

export default PostsContainer;
