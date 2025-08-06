const express=require('express');
const app=express();
const path=require('')

app.get('/',function(req,res){
    res.send("hello world");
})

app.listen(3000);