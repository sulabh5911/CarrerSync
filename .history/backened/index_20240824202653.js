const express=require('express');
const app=express();
const path=require('path');

app.use('ejs',v)

app.get('/',function(req,res){
    res.send("hello world");
})

app.listen(3000);