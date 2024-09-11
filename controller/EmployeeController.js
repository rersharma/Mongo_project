const mongo_connect=require('../Database_connectivity')
class Employee_
{
    emp_model=null
       constructor()
       {
        this.emp_model=mongo_connect.model('emp_store',new mongo_connect.Schema({},{strict:false}),'Employee')
       }

     Add_Record(req,res)
     {
        
            const emp_data=new this.emp_model(
                    {
                        name:req.body.nm,
                        mobile:req.body.mb,
                        address:req.body.address
                    });
                    emp_data.save().then(()=>
                    {
                        res.render('home',{message:req.body.nm+' Record Save Sucessfully'})
                        res.end()
                    }).catch(()=>
                    {
                        res.render('home',{message:"Record Not Save"})
                        res.end()
                    })
                   
        
     }
    //  Delete_Emp(req,res)
    //  {
    //     if(req.method==='GET')
    //     {
    //          res.render('Delete')
    //          res.end()
    //     }
    //     else 
    //     {
    //                 this.emp_model.findOne({name:req.body.nm}).then((record)=>
    //                 {
    //                     if(record)
    //                     {
    //                         return this.emp_model.findOneAndDelete({name:req.body.nm})
    //                     }
    //                     else 
    //                     {
    //                          throw new Error(req.body.nm+' Not Exits in Our Database')
    //                     }
    //                 }).then(()=>
    //                     {
    //                         res.render('Delete',{message:req.body.nm+' Record Deleted Successfully'})
    //                         res.end()
    //                     }).catch((err)=>
    //                             {
    //                                 res.render('Delete',{message:err.message})
    //                                 res.end()
    //                             })  
        
    //     }
    //  }

     async Delete_Emp(req,res)
     {
        if(req.method==='GET')
        {
             res.render('Delete')
             res.end()
        }
        else 
        {
                    const record=await this.emp_model.findOne({name:req.body.nm});
                    
                        if(record)
                        {
                          await this.emp_model.findOneAndDelete({name:req.body.nm})
                           res.render('Delete',{message:req.body.nm+' Record Deleted Successfully'})
                           res.end()
                        }
                        else 
                        {
                            res.render('Delete',{message:req.body.nm+' Not Exists In Our Database'})
                            res.end()
                        }
        }
        
        }
     }

const obj=new Employee_()
module.exports=obj

