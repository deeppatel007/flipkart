import { request,response } from 'express';
import User from "../model/userSchema.js";

export const usersignup = async  (request,responce) =>{
try{
    const exist =await User.findOne({username: request.body.username});
   if(exist)
   {
       return responce.status(401).json('User already exist');
   }
    const user = request.body;
    const newuser = new User(user);
    await newuser.save();

    responce.status(200).json('user is successfully regesterd');

}
catch(error)
{
    console.log('Error:',  error.message);
}
}

export const userlogin = async (request,responce) =>{
    try{
        let user = await User.findOne({username: request.body.username,password: request.body.password});
        if(user)
        {
            return responce.status(200).json(`${request.body.username} login successfully`);
        }
        else 
        {
            return responce.status(401).json('invalid login');
        }
    }
    catch(error)
    {
        console.log('Error:',error.message);
    }
}