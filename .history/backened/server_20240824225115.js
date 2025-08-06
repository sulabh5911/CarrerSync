import app from '/app.js';


app.listen(process.env.PORT,()=>{
    console.log(`surver runinng on port ${process.env.PORT}`)
})
