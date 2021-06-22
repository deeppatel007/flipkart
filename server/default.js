import { products } from "./constants/product.js";
import product from "./model/productSchema.js";
const DefaultData =async ()=>{
    try{
       await product.insertMany(products);
       console.log("data is successfully import");
   
    }
    catch(error)
    {
        console.log('Error: ',error.message);
    }

}

export default DefaultData;