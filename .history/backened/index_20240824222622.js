const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');
const cookieParser=require('cookie-parser');
app.set("ejs","view engine");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


// app.get('/',function(req,res){
//     res.send("hello world");
// })
// const corsOption={
//     origin:'http//localhost:5173',
//     credentials:true
// }
// app.use(cors(corsOption));

// app.listen(3000);
ex