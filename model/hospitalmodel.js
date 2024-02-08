const mongoose=require("mongoose")
const hospitalschema=new mongoose.Schema(

{
    "name":String,
    "adress":String,
    "age":String,
   "phone no":String,

   
}

)
module.exports=mongoose.model("hospitals",hospitalschema)