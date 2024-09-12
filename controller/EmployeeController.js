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

        // Display_Emp(req,res)
        // {
        //       this.emp_model.find({}).then((data)=>
        //     {
        //           res.render('Display',{record:data})
        //           res.end()
        //     }).catch((err)=>
        //     {
        //            res.send(err.message)
        //            res.end()
        //     })
        // }

        async Display_Emp(req,res)
        {
              const data=await this.emp_model.find({})
              res.render('Display',{record:data})
              res.end()
            
        }

        // Search_Emp(req,res)
        // {
        //       if(req.method==='GET')
        //       {
        //           res.render('Search')
        //           res.end()
        //       }
        //       else 
        //       {
        //              const emp_name=req.body.name 
        //              this.emp_model.find({name:emp_name}).then(data=>
        //             {
        //                     res.render('Search',{record:data})
        //                     res.end()
        //             }).catch(err=>
        //             {
        //                 res.send(err.message)
        //                 res.end()
        //             })
        //       }
        // }

       async Search_Emp(req,res)
        {
              if(req.method==='GET')
              {
                  res.render('Search')
                  res.end()
              }
              else 
              {
                     
                     const data=await this.emp_model.find({name:req.body.name})
                     res.render('Search',{record:data})
                     res.end()
                    
              }
        }
     }

const obj=new Employee_()
module.exports=obj

