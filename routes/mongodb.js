require("dotenv").config();
const mongoose = require("mongoose");



mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Mongo Connected");
    })
    .catch(()=>{
        console.log("ERROR : MongoDB not connected");
    })


    const loginSchema = new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        number:{
            type:Number,
            require:true
        }
    })

    const collection = new mongoose.model("loginCollection",loginSchema)

    module.exports = collection