import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Server is connected to the database");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/Grocery_Delivery_App`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
