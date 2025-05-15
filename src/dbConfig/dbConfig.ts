import mongoose from "mongoose";

export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("❌ MONGO_URI not found in environment variables");
    }

    await mongoose.connect(uri);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log("❌ MongoDB connection error:", error);
      process.exit(1);
    });
  } catch (error) {
    console.log("❌ Something went wrong while connecting to the database:", error);
  }
}
