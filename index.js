const express=require('express')
const app=express()
const port=1993
const myrouter=require('./route')
const path=require('path')
const bodyparser=require('body-parser')  // for collecting form Data
const session=require('express-session')

app.use(session({
      secret:'user_emailid',
      resave:false,
      saveUninitialized:true,
      cookie:{maxAge:60000}
}))
app.use(bodyparser.urlencoded({extended:false})) // Express TO set the Body-parser
app.use('/static',express.static(__dirname+'/static')) // for allow external static content

app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))

app.set('view engine','ejs')

app.use('/',myrouter)

app.listen(port,()=>
{
      console.log(`click Here http://localhost:${port}`)
})


