const express=require('express')
const router=express.Router()
const Emp_Obj=require('./controller/EmployeeController')

router.use("/",(req,res)=>
{
     Emp_Obj.Add_Record(req,res)
})


module.exports=router
