require("dotenv").config();
const express = require("express");
const router =  express();
const collection = require("./mongodb");
const bcrypt = require("bcrypt");




router.get('/',(req,res)=>{
    res.render("login");
})

router.get('/signup',(req,res)=>{
    res.render("signup");
})

router.post("/signup",async (req,res)=>{

    const hashedPassword = await bcrypt.hash(req.body.password ,10)
    const data = {
        name:req.body.name,
        password:hashedPassword,
        number:req.body.number
    };

    await collection.insertMany([data]);

    res.render("home",{number : data.number});

})

router.post('/login',async (req,res)=>{

    try{
        const check = await collection.findOne({name:req.body.name})
        if(await bcrypt.compare(req.body.password, check.password))
        res.render('home',{number : check.number});
        else
        res.render('login',{errorMessage:"Wrong Password"});

    }catch{
        res.send("wrong details");
    }
    
})

module.exports = router
