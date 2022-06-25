import express from 'express';
import {join} from 'path';
const app=express();
// const port=process.env.port || '3700';
const port=4300;
import myfile from './router/sFile.js';

const options={
    dotfile:"ignore",
    etag:false,
    extension:['htm','html'],
    index:false,
    maxAge:'1d',
    redirect:false,
    setHeaders:function(res,path,stat){
        res.set('x-timestamp',Date.now())
    }

}

// static file code
// app.use(express.static(join(process.cwd(),'public')));
// for unique or virtual path 
app.use('/static',express.static(join(process.cwd(),'public'),options));
// for specific file
// app.use('/css',express.static(join(process.cwd(),'public/css')));
console.log(join(process.cwd(),'public'))

app.use('/files',myfile);

app.listen(port,()=>{
  console.log(`Your app is running on ${port}`)  
})