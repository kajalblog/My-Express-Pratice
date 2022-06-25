import {join} from 'path';
const homecontrolller=(req,res)=>{
    res.sendFile(join(process.cwd(),'pages','index.html'));
}
const aboutController=(req,res)=>{
    res.sendFile(join(process.cwd(),'pages','about.html'));
}
export {homecontrolller,aboutController}