import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 8000;
const username  = process.env.db_use;
const password  = process.env.db_pass;

Connection(username,password);
app.listen(PORT,()=>console.log(`server is successfully running on ${PORT} `)) ;
DefaultData();