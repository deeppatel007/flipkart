import mongoose from 'mongoose';



const Connection = async (username,password)=>{
    const URL = `mongodb://${username}:${password}@flipkart-shard-00-00.9b4x8.mongodb.net:27017,flipkart-shard-00-01.9b4x8.mongodb.net:27017,flipkart-shard-00-02.9b4x8.mongodb.net:27017/FLIPKART?ssl=true&replicaSet=atlas-fw0rpz-shard-0&authSource=admin&retryWrites=true&w=majority`;
        try{
        await mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify:true });
        console.log('database connected successfuly');
    }
    catch (error){
        
        console.log('error: ',error.message);
    }
}
export default Connection;