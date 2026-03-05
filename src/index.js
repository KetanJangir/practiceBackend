import dotenv from "dotenv";
import connectDb from "./db/dbConnection.js";
import app from "./app.js";


dotenv.config({
    path:'./.env'
});
const port = process.env.PORT;

connectDb().then(()=>{

    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    });

    app.on("error",(error)=>{
        console.log("Error",error)
    });
}).catch((error)=>{
    console.log("MongoDb connection failed : ",error)
});



















// (async()=>{
//     try{
//         const dbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
//         console.log("MongoDb connected Successfully : ",dbConnection.connection.host);

//         app.listen(port,()=>{
//             console.log(`server is running on port ${port}`)
//         });
//         app.on("error",(error)=>{
//             console.log("Error : ",error);
//         });
//     }catch(error){
//         console.log("MongoDb connection Error : ",error);
//     }
// })()


