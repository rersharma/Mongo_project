const mongo=require('mongoose')

mongo.connect('mongodb://localhost:27017/Dav').then(()=>{
      console.log('Db Connected')
}).catch(()=>
{
      console.log('Mongo Db Server Shutdown Please Connect it')
})

module.exports=mongo