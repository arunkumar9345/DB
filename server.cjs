// const express=require('express')
// const app=express()
// app.use(express.static(__dirname))
// // console.log('hello welcome')
// app.get('/get-data',function(request,response){
//     // console.log(request)
//     const repdata={
//         'name : ':'class',
//         'sub':'node'
//     }
//     response.status(200).json(repdata)
// })

// app.listen(8004)




const express = require('express')
const bodyParser = require('body-parser')
const {connectdb,getdb}=require('./db.cjs')
const {ObjectId}=require('mongodb')
const app = express()
let db
app.use(express.static(__dirname))
app.use(bodyParser.json())
connectdb(function(error){
    if(!error)
    {
        const port=process.env.PORT || 8004
        app.listen(port)
        console.log("listening to the port.....8004")
        db=getdb()
    }
    else{
        console.log(error)
    }
})

app.post('/make-new-record',function(request, response) {
    db.collection('expressdata').insertOne(request.body)
    console.log(request.body);
    console.log("value inserted sucessfully");

    
})
app.post('/delete-data',function(request, response) {
    db.collection('expressdata').deleteOne({
        // _id : new ObjectId(request.body.id),
        username: request.body.username,
        email:request.body.email,
        phno:request.body.phno,
        password: request.body.password,
    })
    console.log(request.body);
    console.log("value deleted sucessfully");

    
})
app.post('/update-data',function(request,response){
    db.collection('expressdata').updateOne(
        {"username": request.body.username} ,{$set:{'password':request.body.password}}
    )
    console.log(request.body);
    console.log("value updated sucessfully");
})