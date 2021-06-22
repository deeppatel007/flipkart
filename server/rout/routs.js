import express from 'express';
import {usersignup} from '../controler/controler';
const route = express.Router();

router.post('/signup', usersignup);

export default route;