import app from './app.js';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name:process.env
})

app.listen(process.env.PORT,()=>{
    console.log(`surver runinng on port ${process.env.PORT}`)
})
