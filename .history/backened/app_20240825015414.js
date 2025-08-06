import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import coo

const app=express();
dotenv.config({path: "./config/config.env"})
app.use(cors({
    origin:[process.env.FRONTENED_URL],
    methods:["GET","POST","DELETE","PUT"],
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extened:true}));
export default app