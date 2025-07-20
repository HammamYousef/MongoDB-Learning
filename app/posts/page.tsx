"use client";
import PostsContainer from "@/components/Post/PostContainer";
import PostForm from "@/components/Post/PostForm";
import PostsHero from "@/components/Post/PostsHero";
import { useState } from "react";

export default function PostsPage() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <PostsHero />
      <PostForm onPostAdded={() => setRefresh((r) => r + 1)} />
      <div key={refresh}>
        <PostsContainer />
      </div>
    </div>
  );
}
