require('dotenv').config()
const express = require('express')
const mongoose= require('mongoose')
const productRoute=require('./routes/productRoute')
const userRoute=require('./routes/userRoute')
const errorMiddleware=require('./middleware/errorMiddleware')

const app = express()

//const MONGO_URI=process.env.MONGO_URI
//const PORT=process.env.PORT||3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/products',productRoute);
//app.use('/api/users',userRoute);
//routes
app.get('/blog',(req,res)=>{
    res.send('Hello blog my name is suba')
})

app.get('/',(req,res)=>{
    
   res.send('Hello Node API')
})


app.use(errorMiddleware);

mongoose.
connect('mongodb+srv://admin:admin@nodeapi.btcywoe.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongodb')
    app.listen(3000,()=>{
        console.log('Node API app is running on port 3000')
    })
}).catch((error=>{
    console.log('error')
}))