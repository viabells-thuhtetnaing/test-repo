import { UserTestModel } from "test-schema";
import mongoose from "mongoose";

const connect = async () => {
  try {
    const uri = "mongodb://localhost/test";
    if (!uri) {
      throw new Error("MongoDB URI not found");
    }
    await mongoose.connect(uri);
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected successfully.");
  } catch (error) {
    console.error("Database disconnection failed:", error);
  }
};

connect();

UserTestModel.find({}).then((users) => {
  console.log(users);
});
