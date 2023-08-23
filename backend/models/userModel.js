const mongoose = require("mongoose");

//It is a schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number
    }
} , {timestamps:true});

//From here creating model
const User = mongoose.model('User',userSchema);
module.exports = User;