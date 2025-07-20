/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPost, getAllPosts } from "@/lib/actions/post.actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await getAllPosts();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  try {
    const user = await createPost(title, content, "687bec1d66e32a640f5318d0");
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
