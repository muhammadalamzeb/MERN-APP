const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/userModel");

const app =express();
app.get("/",(req,res)=>{
    res.send("api running");
});

app.use(express.json());

mongoose.connect(process.env.URI).then(()=>{
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 8000,(error)=>{
        if(error) console.log(error);

        console.log("Express.JS Connected",process.env.PORT);
    } );
}).catch((error)=>{
    console.log("error",error);
});


//when user inputs in interface
//creating route/api
app.post("/", async (req,res)=> {
    const {name,email,age} = req.body;

    const User = require("./models/userModel");
    try{
        const userAdded = await User.create({
            name : name,
            email : email,
            age:age
        });
        res.status(201).json(userAdded);
    }
    catch(error){
        console.log(error);
        res.status(400).json({error:error.message});
    }
    
});
