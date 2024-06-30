const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const MONGODB_URI = "mongodb+srv://afsalkpmanu31:afsalkp123@cluster0.yzytvxu.mongodb.net/StudentManagement?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log("Mongoose connected successfully");
})
.catch(()=>{
    console.log("An error occured on mongoose");
})