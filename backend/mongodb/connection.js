const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(`mongodb://0.0.0.0:27017/Todo`,{
            useNewUrlParser:true,
        })
        console.log(`Database connected ${conn.connection.host}`);
        return conn;
    }catch(error){
        console.error(error);
        process.exit(1);    
    }
}
module.exports = connectDB;