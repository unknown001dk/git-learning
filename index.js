import express from "express";
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';

dotenv.config();

const app = express();

// middleware
app.use(express.json());

app.use('/api/v1', userRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => { 
  console.log(`Server listening on ${port}`);
});
