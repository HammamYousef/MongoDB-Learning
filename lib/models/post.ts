import { model, models, Schema, Document, Types } from "mongoose";

export interface Post {
  title: string;
  content: string;
  author?: Types.ObjectId; // Optional reference to the User model
}

export interface PostDocument extends Post, Document {
  _id: Types.ObjectId | string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<Post>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = models?.Post || model<Post>("Post", postSchema);
export default PostModel;
