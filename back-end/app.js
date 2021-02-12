const express = require('express')
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

const users = new mongoose.Schema ({
  fullname : String, 
  email : String,
  password : String
}); 

const tasks = new mongoose.Schema ({
  id: Number, 
  name: String,
  title: String,
  priority: String,
  category: String,
  categoryDetails: String,
  date: String,
  status: String,
  user: String
}); 

const User = mongoose.model("User", users);
const Task = mongoose.model("Task", tasks);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.post('/save_data', urlencodedParser,(req,res) => {
//     Task.create({_id: req.body.id}, {
//     description: req.body.description,
//   status: req.body.status,
//   dueOn: req.body.dueOn,
//   priority: req.body.priority,
//   category: req.body.category
//   }, function(err){
//     if (err){
//       console.log(err)
//     }else {
//       console.log("Successfully saved")
//     }
//     res.send("saved")
//   })
// })


app.post('/add_task',(req,res) => {
  console.log(req.body)
  Task.create(req.body, function(error, docs){
  if (error){
    console.log(error)
  }else {
    console.log(docs)
  }
  res.send("saved")
})
})

app.post('/delete_task',(req,res) => {
  console.log(req.body)
  Task.deleteOne({id: req.body.id}, req.body ,function(error, docs){
  if (error){
    console.log(error)
  }else {
    console.log(docs)
  }
  res.send("saved")
})
})

app.post('/update_task',(req,res) => {
  console.log(req.query.user)
  Task.updateOne({id: req.body.id}, req.body ,function(error, docs){
  if (error){
    console.log(error)
  }else {
    console.log(docs)
  }
  res.send("saved")
})
})

app.get('/get_task_detail', (req, res) => {
  console.log(req)
  Task.find({user: req.query.user} ,function(err, users){
    if(err)
      console.log(err)
      else {
        console.log("Data has been sent successfuly")
        res.send(JSON.stringify(users))
      }
    })
});


app.post('/signup', (req, res) => {
  User.findOne({email:req.body.email},function(err, doc){
    if(doc){
      res.send("user is already exist")
    }else{
      User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
      }, function(err){
        if (err){
          console.log(err)
        }else {
          console.log("Successfully saved")
        }
        res.send("saved")
    })
  }})})




app.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }, function(err, doc){
    if (err) throw err;
    var token = jwt.sign({ id: users._id}, "secret", { expiresIn: 86400 })
    
    if (doc) {
      res.status(200).send({auth: true, token: token, name: doc.fullname, email: doc.email});
    } else {
      res.send("failed")
    }
    
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});




