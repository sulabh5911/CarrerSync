import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import userRouter from './routes/userRouter.js';
import jo

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

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: "/temp/",
}))
export default app