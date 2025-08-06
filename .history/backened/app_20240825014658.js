import express from 'express'
import dotenv from 'dotenv';
import cores from 'cores';

const app=express();
dotenv.config({path: "./config/config.env"})
app.use(cors({
    origin:{process.env}
}))
export default app