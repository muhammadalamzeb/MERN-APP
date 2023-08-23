const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/userRoute");

const app =express();


app.use(express.json());

mongoose.connect(process.env.URI).then(()=>{
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 8000,(error)=>{
        if(error) console.error(error);

        console.log("Express.JS Connected",process.env.PORT);
    } );
}).catch((error)=>{
    console.error("error",error);
});

app.use(userRoute);