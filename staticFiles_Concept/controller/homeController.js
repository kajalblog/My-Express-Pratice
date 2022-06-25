import {join} from 'path';
const homecontrolller=(req,res)=>{
    // res.send("Home controller");
    res.sendFile(join(process.cwd(),'view','index.html'));

}
export {homecontrolller}