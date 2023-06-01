import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
mongoose.set('strictQuery',false);
const Connection = async () => {
   const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-d4evj2n-shard-00-00.z3su7z2.mongodb.net:27017,ac-d4evj2n-shard-00-01.z3su7z2.mongodb.net:27017,ac-d4evj2n-shard-00-02.z3su7z2.mongodb.net:27017/?ssl=true&replicaSet=atlas-wsung5-shard-0&authSource=admin&retryWrites=true&w=majority`
      
    try {
        // await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;