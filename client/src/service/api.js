import axios from 'axios';

const url = 'http://localhost:8000'
export const authanticateSignup =async (user)=>
{
    try{
    return await axios.post(`${url}/signup`,user);
    }
    catch(error)
    {
        console.log("error while signup api",error);
    }
}