const express = require('express');
const app = express();
const path = require('path');







app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));


const userRouter = require('./routes/index')


app.use('/',userRouter);  


console.log(process.env.PORT)
app.listen(process.env.PORT ,()=>{
    console.log("Port Connected");
})