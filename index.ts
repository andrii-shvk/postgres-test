import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import userRouter from "./routes/user.routes";
import postRouter from "./routes/post.routes";
import pool from "./db";
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', userRouter);
app.use('/api', postRouter);

pool.connect()
    .then(() => console.log("Connected to the database!"))
    .catch(err => console.error("Connection error", err.stack));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
