import express from 'express';
import {usersignup,userlogin} from '../controler/controler.js';
import {getProducts} from '../controler/product-controler.js';
const router = express.Router();

router.post('/signup', usersignup);
router.post('/login',userlogin);
router.get('/products',getProducts);


export default router;