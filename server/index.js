import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './rout/router.js';
dotenv.config();
const app = express();
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',router);
app.use('/signup' , ()=>{

})
const PORT = 8000;
const username  = process.env.db_use;
const password  = process.env.db_pass;

Connection(username,password);
app.listen(PORT,()=>console.log(`server is successfully running on ${PORT} `)) ;
DefaultData();