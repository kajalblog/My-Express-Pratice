import express from 'express';
const app=express();
const port=process.env.port || '3800';
import users from './router/web.js';
app.use('/',users);
app.get('/all',(req,res)=>{
    res.send("All data");
})
app.listen(port,()=>{
    console.log(`Your app is running on ${port}`);
})
