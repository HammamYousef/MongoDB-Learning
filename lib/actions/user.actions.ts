"use server";

import { Types } from "mongoose";
import connectToDatabase from "../db";
import UserModel, { User } from "../models/user";

export async function createUser(
  name: string,
  email: string,
  posts?: string[]
) {
  if (!name || !email) {
    throw new Error("Name and email are required.");
  }
  try {
    await connectToDatabase();
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists.");
    }
    const userData: User = { name, email };
    if (posts && posts.length > 0) {
      userData.posts = posts.map((id) => new Types.ObjectId(id));
    }
    const newUser = await UserModel.create(userData);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getAllUsers() {
  try {
    await connectToDatabase();
    const users = await UserModel.find({});
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
