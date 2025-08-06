import mongoose from 'mongoose'

export const dbConnection=()=> {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_S"
    })
}