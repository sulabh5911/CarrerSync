import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name!"],
        minLength:[3,"Name must contain at least 3 characters!"],
        maxLength:[15,"Name cannot exceed 30 characters!"],
    },
    email:{
        type:String,
        required:[true,"Please provide your email!"],
        validate:[validator.isEmail,"Please provide a valid email"],
    },
    phone:{
        type:Number,
        required:[true,"Please provide your phone number."],
    },
    password:{
        type:String,
        required:[true,"Please provide your password"],
        minLength:[8,"Password must contain at least 8 characters"],
        maxLength:[32,"Password cannot exceeds 32 characters"],
    },
    role:{
        type:String,
        required:[true,"Please provide your role"],
        enum:["Job Seeker","Employer"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
};

userSchema.methods.geJWToken=function(){
    return jwt.sign({id:this._id}, pfo)
}

