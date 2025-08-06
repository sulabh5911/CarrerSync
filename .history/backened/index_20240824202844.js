const express=require('express');
const app=express();
const path=require('path');

app.set("ejs","view engine");
app.use(express.json());
app.use()

app.get('/',function(req,res){
    res.send("hello world");
})

app.listen(3000);