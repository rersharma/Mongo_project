const mongo_connect=require('../Database_connectivity')
class Employee_
{

     Add_Record(req,res)
     {
        if(req.method==='GET')
        {
            res.render('home')
            res.end()
        }
        else 
        {
                 const emp_model=mongo_connect.model('emp_store',new mongo_connect.Schema({},{strict:false}),'Employee')
                 const emp_data=new emp_model(
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
     }
}

const obj=new Employee_()
module.exports=obj


/*


Explanation:

	•	No Pre-defined Schema: The Employee model is created using an empty schema {} with { strict: false }, allowing you to store documents in MongoDB without enforcing any schema. This is useful when you want to work directly with an existing MongoDB collection without defining a Mongoose schema.
	•	Collection Reference: The third parameter in mongoose.model('Employee', new mongoose.Schema({}, { strict: false }), 'employees') specifies the collection name 'Employee'. Mongoose will directly interact with this collection.
	•	Storing Data: When the form is submitted, the data is directly saved into the Employee collection in your MongoDB database.


    */