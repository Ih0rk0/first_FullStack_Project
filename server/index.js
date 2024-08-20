const mysql =require('mysql')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
const db = mysql.createPool({
    host:'bin0mkfwgmbvc4yl0pkl-mysql.services.clever-cloud.com',
    user:'uqdhifaytkzqp9qq',
    password:"BQCUIh5LDsJ0VwpX2kFy",
    database:"bin0mkfwgmbvc4yl0pkl"
})


app.get('/',(req,result)=>{
    const query =" SELECT * FROM users"
    db.query(query,(err,res)=>{
        console.log(res)
        console.log(err)
        result.json(res)
        
    })

})

app.post('/',(req,response)=>{
    console.log(req.body.name, typeof(req.body.name))
    const insert =`INSERT INTO users(user_name,salary) VALUES ('${req.body.name}',${req.body.salary});`
    const select=' SELECT * FROM users'
    db.query(insert,(err,res)=>{
        console.log(err)

        db.query(select,(err,result)=>{
            console.log(result)
            response.json(result)
        })

        
    })
})

app.post('/delete',(req,response)=>{
    console.log(req.body)
   const deleteItem =`DELETE FROM users WHERE user_id = ${req.body.userId};`
    const select=' SELECT * FROM users'
    db.query(deleteItem,(err,res)=>{
        console.log(err)

        db.query(select,(err,result)=>{
            console.log(result)
            response.json(result)
        })

        
    })
})


app.listen(3001,()=>{
    console.log('server workinh on 3001')
})

