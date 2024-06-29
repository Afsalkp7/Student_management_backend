const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name : {
        type:String
    },
    standerd : {
        type : String
    },
    age : {
        type : Number
    }
})

const studentCollection = new mongoose.model("studentCollection",studentSchema);
module.exports = studentCollection;