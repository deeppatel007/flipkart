import express from 'express';
import {usersignup} from '../controler/controler.js';
const router = express.Router();

router.post('/signup', usersignup);

export default router;