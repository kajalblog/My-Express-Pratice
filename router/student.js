import express  from "express";
const router=express.Router();
router.get('/all', (req, res) => {
    res.send('Hello Students!')
  });
  router.post('/create',(req,res)=>{
      res.send("create student");
  });
  router.post('/update',(req,res)=>{
      res.send("update student");
  });
  router.post('/delete',(req,res)=>{
      res.send("delete student");
  });
//   module.exports=router;
export default router;
