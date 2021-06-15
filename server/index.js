import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = 8000;
const URL = 'mongodb+srv://deeppatel:<deeppatel1204>@flipkart.ud4lx.mongodb.net/FLIPKART?retryWrites=true&w=majority';
const Connection = (URL,(useNewUrlParser: true, useUnifiedTopolog:true,usefindAndModify:false))=>{

}
app.listen(PORT,()=>console.log(`server is successfully running on ${PORT} `));