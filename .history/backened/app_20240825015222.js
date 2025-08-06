import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

const app=express();
dotenv.config({path: "./config/config.env"})
app.use(cors({
    origin:[process.env.FRONTENED_URL],
    methods:["GET","POST","DELETE","PUT"],
    credentials:true,
}));

app.use(express.json());
app.use()
export default app