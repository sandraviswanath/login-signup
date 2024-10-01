const express=require('express');
const connection = require('./config/mongo');
const router = require('./router/Router');


const app=express();

const cors =require('cors');


connection();

app.use(express.json())
app.use(cors())
app.use('/',router);


const PORT=4005
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))