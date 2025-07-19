import mongoose from "mongoose";

async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("Please define the MONGODB_URI environment variable.");
    }

    await mongoose.connect(mongoURI);
  }

  return mongoose.connection;
}

export default connectToDatabase;
