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

export const authanticatelogin = async (user) => {
  
    try{
        return await axios.post(`${url}/login`,user);



    }
    catch(reeor){
        console.log('error while calling login api');

    }
  
}