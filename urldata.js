import express from 'express';
const app=express();
const port=process.env.PORT|| 3600;
app.get('/student/delete/:id',(req,res)=>{
    console.log(req.params); //req.paramas used to fetch data from url
    res.send(`student deleted ${req.params.id}`);
})
app.get('/product/:category/:id',(req,res)=>{
    console.log(req.params);
    // res.send(`Product product_category : ${req.params.category} & Product_ID: ${req.params.id}`);  
    //norma way
    // using destructuring
    const {category,id}=req.params;
    res.send(`Product product_category : ${category} & Product_ID: ${id}`); 
})
app.get('/product/order/:year/and/:month',(req,res)=>{
    console.log(req.params);
    const {year,month}=req.params;
    res.send(`Month:${year} and Month:${month}`);
})

app.get('/train/:from-:to',(req,res)=>{
    console.log(req.params);
    const{from,to}=req.params;
    res.send(`Train stsrted from : ${from} -To : ${to}`);
})
app.get('/location/:state.:city',(req,res)=>{
    console.log(req.params);
    const{ state,city}=req.params;
    res.send(`State: ${state} City:${city}`);

})


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})