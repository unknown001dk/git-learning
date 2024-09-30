import express from "express";
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import mongoose from "mongoose";
import { connectDB } from "./config/Database.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1', userRouter);

// connect to db and start server
const port = process.env.PORT || 8000;
app.listen(port, () => { 
  // connectDB();
  mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB connected successfully")).catch(() => console.log("Couldn't connect"));
  console.log(`Server listening on ${port}`);
});
