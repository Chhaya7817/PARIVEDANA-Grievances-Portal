
if(process.env.NODE_ENV !="production")
{
  require("dotenv").config({path:"./config.env"})
}
const mongoose=require('mongoose');
const dbUrl=process.env.DB_URI ||"mongodb://127.0.0.1:27017/PARIVEDANA"
const sessionsecret=process.env.SESSION_SECRET
//mongodb://localhost:27017/userdata

mongoose.connect(dbUrl,
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected with Atlas");
}).catch((err)=>{
    console.log("No Connection to Database");
})


