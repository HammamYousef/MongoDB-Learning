import { getAllPosts } from "@/lib/actions/post.actions";
import { PostDocument } from "@/lib/models/post";
import React from "react";

const postsPage = async () => {
  let allPosts = [];
  try {
    allPosts = await getAllPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Posts</h1>
      <div className="space-y-6">
        {allPosts && allPosts.length > 0 ? (
          allPosts.map((post: PostDocument) => (
            <div
              key={post._id.toString()}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="text-sm text-gray-500">
                Posted by {post.author ? post.author.toString() : "Unknown"} on{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No posts found.</div>
        )}
      </div>
    </main>
  );
};

export default postsPage;
