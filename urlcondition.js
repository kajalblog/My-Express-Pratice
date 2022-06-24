import express from 'express';
const app=express();
const port=process.env.PORT|| 3700;
app.get('/student/delete/:id([0-9]{2})',(req,res)=>{
    console.log(req.params); //req.paramas used to fetch data from url
    res.send(`student deleted ${req.params.id}`);
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})