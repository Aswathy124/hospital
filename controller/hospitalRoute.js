const express=require("express")
const hospitalmodule = require("../model/hospitalmodel")
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("hospital managment")
})

router.post("/add",async(req,res)=>{
    let data=req.body
    let hospital=new hospitalmodule(data)
    let result=await hospital.save()

    res.json({status:"sucessfully added details"})
})






    


module.exports=router
