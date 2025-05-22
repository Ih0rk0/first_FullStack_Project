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

// оновити promotion (toggleStar)
app.put('/users/:id/promotion', (req, res) => {
  const id = req.params.id;
  const { promotion } = req.body;  // boolean
  const sql = `UPDATE users SET promotion = ? WHERE user_id = ?;`;
  db.query(sql, [promotion, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    // повертаємо оновлений запис
    db.query(
      'SELECT * FROM users WHERE user_id = ?',
      [id],
      (err2, result) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json(result[0]);
      }
    );
  });
});

// оновити get_premium (toggleRise)
app.put('/users/:id/premium', (req, res) => {
  const id = req.params.id;
  const { get_premium } = req.body;  // boolean
  const sql = `UPDATE users SET get_premium = ? WHERE user_id = ?;`;
  db.query(sql, [get_premium, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    db.query(
      'SELECT * FROM users WHERE user_id = ?',
      [id],
      (err2, result) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json(result[0]);
      }
    );
  });
});

app.listen(3001,()=>{
    console.log('server workinh on 3001')
})

