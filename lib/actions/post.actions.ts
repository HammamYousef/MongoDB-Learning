"use server";

import connectToDatabase from "../db";
import PostModel from "../models/post";
import UserModel from "../models/user";

export async function createPost(
  title: string,
  content: string,
  author?: string
) {
  if (!title || !content) {
    throw new Error("Title and content are required.");
  }
  try {
    await connectToDatabase();
    const newPost = await PostModel.create({ title, content, author });
    return newPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

export async function getAllPosts() {
  try {
    await connectToDatabase();
    const posts = await PostModel.find({}).populate("author", "name email");
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
