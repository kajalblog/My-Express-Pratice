import express from 'express';
import stud from './router/student.js';
import tech from './router/teacher.js';
const app=express();
const port=3500;
app.use('/student',stud);
app.use('/teacher',tech);



app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})