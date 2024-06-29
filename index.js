const express = require("express");
const app = express();
const dotenv = require("dotenv")
const PORT = 3000 || process.env.PORT
const mongoose = require("./database/connect");
const bodyParser = require("body-parser")
const studentRouter = require("./routes/student")

app.use(bodyParser.json());

app.use("/student",studentRouter)

app.get('/',(req,res)=>{
    res.status(200).json({'success':"working"})
})

app.listen(PORT, () => {console.log(`Connecting to port ${PORT}...`)});