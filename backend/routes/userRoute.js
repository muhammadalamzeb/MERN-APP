const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/userModel");

const router = express.Router();

//when user inputs in interface
//creating route/api
router.post("/", async (req,res)=> {
    const {name,email,age} = req.body;
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

//GET API
router.get("/", async (req,res)=>{
    try
    {
        const showALL = await User.find();
        res.status(200).json(showALL);
        res.send("api running");
    }catch(error){
        console.log(error);
        res.send(500).json({error: error.message});
    }
});
//GET single user by id
router.get("/:id", async (req,res)=>{
    const {id} = req.params;
    try
    {
        const singleUser = await User.findById({_id : id});
        res.status(200).json(singleUser);
    }catch(error){
        console.log(error);
        res.send(500).json({error: error.message});
    }
    res.send("api running");
});

//Delete User Operation
router.delete("/:id", async (req,res)=>{
    const {id} = req.params;
    try
    {
        const singleUser = await User.findByIdAndDelete({_id : id});
        res.status(200).json(singleUser);
    }catch(error){
        console.log(error);
        res.send(500).json({error: error.message});
    }
    res.send("api running");
});

module.exports = router;