const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');
app.set("ejs","view engine");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',function(req,res){
    res.send("hello world");
})
const corsOption={
    
}

app.listen(3000);