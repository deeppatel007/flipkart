import User from "../model/userSchema";
const usersignup = (request,responce) =>{
try{
    const user = request.body;
    const newuser = new User(user);

}
catch(error)
{
    console.log('Error:',  error.message);
}
    return "hello";
}