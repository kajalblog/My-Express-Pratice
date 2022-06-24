// const express = require('express') old version
import express from 'express';
const app = express();
const port = 3400

app.get('/student/all', (req, res) => {
  res.send('Hello World!');
});
app.post('/student/create',(req,res)=>{
    res.send("create student");
})
app.post('/student/update',(req,res)=>{
    res.send("update student");
})
app.post('/student/delete',(req,res)=>{
    res.send("delete student");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})