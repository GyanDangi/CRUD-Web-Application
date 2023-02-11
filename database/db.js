import mongoose from "mongoose"

// mongoose.set('strictQuery',true);
const connection =async (username,password) =>{

    const URL=`mongodb://${username}:${password}@ac-m7mbmnv-shard-00-00.k25j4gi.mongodb.net:27017,ac-m7mbmnv-shard-00-01.k25j4gi.mongodb.net:27017,ac-m7mbmnv-shard-00-02.k25j4gi.mongodb.net:27017/?ssl=true&replicaSet=atlas-4li7ed-shard-0&authSource=admin&retryWrites=true&w=majority`;

   
    
    try{
      await mongoose.connect(URL, {useNewUrlParser:true ,useUnifiedTopology:true} );
      mongoose.set('strictQuery', true);
      console.log("database connected successfully");
    }
    catch(error){
        console.log("error while connecting with database:",error);
    }
}

export default connection;