const allStudent=(req,res)=>{
    res.send("All students");

}
const deleteStudent=(req,res)=>{
    console.log(req.params);
    const {id}=req.params;
    console.log(id);
    if(id==10)
    {
        res.send("this id is not deleted");
    }
    else{
        res.send(`student id ${id} is deleted`);
    }
    
    // we can not send double response so we use return or use if else
}
export {allStudent,deleteStudent}