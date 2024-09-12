const express=require('express')
const router=express.Router()
const Emp_Obj=require('./controller/EmployeeController')

router.get("/",(req,res)=>
{
     res.render('home')
     res.end()
})

router.post("/",(req,res)=>
     {
          Emp_Obj.Add_Record(req,res)
     })

router.use('/Delete_record',(req,res)=>
{
      Emp_Obj.Delete_Emp(req,res)
})

router.use('/Display_record',(req,res)=>
{
       Emp_Obj.Display_Emp(req,res)
})

module.exports=router
