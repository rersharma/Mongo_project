const express=require('express')
const router=express.Router()
const Emp_Obj=require('./controller/EmployeeController')
const user_obj=require('./controller/UserController')


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

router.use('/search_record',(req,res)=>
{
    Emp_Obj.Search_Emp(req,res)
})

router.use('/update_record',(req,res)=>
{
     Emp_Obj.Update_Emp(req,res)
})

router.use('/update_records',(req,res)=>
{
     Emp_Obj.Update_Emp_final(req,res)
})

router.use('/login',(req,res)=>
{
   user_obj.Login_Check(req,res)
})

router.use('/newuser',(req,res)=>
{
   user_obj.Create_Account(req,res)
})

router.use('/Dashboard',(req,res)=>
{
       if(req.session.user_emailid!=null)
       {
            res.render('Welcome')
            res.end()
       }
       else 
       {
           res.render('Login',{message:'Login Here...'})
           res.end()
       }
})

router.use('/Logout',(req,res)=>
{
    req.session.destroy()
    res.render('Login',{message:'Logout Successfully'})
    res.end()
})

module.exports=router
