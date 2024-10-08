const mongoose=require('mongoose');


const connectDB=async()=>{
    try{
        
        const conn=await mongoose.connect(process.env.MONGO_URL,{
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
// D:\Rsesume Project\ToDo-webApp-main\frontend\node_modules