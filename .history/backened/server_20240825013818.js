import app from './app.js';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API,
})

app.listen(process.env.PORT,()=>{
    console.log(`surver runinng on port ${process.env.PORT}`)
})
