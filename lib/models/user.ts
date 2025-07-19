import { model, models, Schema, Document, Types } from "mongoose";

export interface User {
  name: string;
  email: string;
  posts?: Types.ObjectId[]; // Array of post IDs
}

export interface UserDocument extends User, Document {}

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId, // Array of post IDs
        ref: "Post", // Reference to the Post model
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = models?.User || model<User>("User", userSchema);
export default UserModel;
