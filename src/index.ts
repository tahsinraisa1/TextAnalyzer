import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import allRoutes from "./routes";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/v1/api", allRoutes);

// mongoose
//   .connect(process.env.MONGO_DB_URI as string, {})
//   .then(() => console.log("MongoDB connection successful"))
//   .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
