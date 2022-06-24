import express from 'express';
const app=express();
const port=process.env.port || '3900';
import stud from './routes/stud.js';

app.use('/student',stud);

app.listen(port,()=>{
    console.log(`your app is running on ${port}`);
})