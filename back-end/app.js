const express = require('express')
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// const users = new mongoose.Schema ({
//   firstName : String, 
//   lastName : String, 
//   email : String,
//   password : String

// }); 

const tasks = new mongoose.Schema ({
  id: Number, 
  name: String,
  title: String,
  priority: String,
  category: String,
  date: String,
  status: String
}); 




// const User = mongoose.model("User", users);
const Task = mongoose.model("Task", tasks);

// const user = new User ({
//   firstName: "Fadi",
//   lastName: "Habeeb",
//   email: "fadi@fafa",
//   password: "123"
// }); 

// const tasksArr =   [
//   {
//       "id": 1,
//       "name": "Do laundry",
//       "title": "Task 1",
//       "priority": "5",
//       "category": "red",
//       "date": "2021-03-22"
//   },
//   {
//       "id": 2,
//       "name": "Buy milk",
//       "title": "Task 2",
//       "priority": "2",
//       "category": "red",
//       "date": "2021-03-22"
//   },
//   {
//       "id": 3,
//       "name": "task",
//       "title": "Task 3",
//       "priority": "4",
//       "category": "blue",
//       "date": "2022-01-22"
//   },
//   { 
//       "id": 4,
//       "name": "Test",
//       "title": "Test",
//       "priority": "1",
//       "category": "green",
//       "date": "2020-03-22"
//   },
//   { 
//       "id": 5,
//       "name": "Test",
//       "title": "Test",
//       "priority": "1",
//       "category": "green",
//       "date": "2020-03-22"
//   },
//   { 
//       "id": 6,
//       "name": "Test",
//       "title": "Test",
//       "priority": "1",
//       "category": "green",
//       "date": "2020-03-22"
//   },
//   { 
//       "id": 7,
//       "name": "Test",
//       "title": "Test",
//       "priority": "1",
//       "category": "green",
//       "date": "2020-03-22"
//   }
// ]

// Task.insertMany(tasksArr, function(error, docs) {console.log(error)});


// user.save()
// task.save()


// User.find(function(err, users){
// if(err)
//   console.log(err)
//   else {
//   }
// })


var urlencodedParser = bodyParser.urlencoded({ extended: false })




// router.route('/save_data').post((req,res) => {
//   console.log("Ffff")
//   console.log(req.body.description)

// })


app.post('/save_data', urlencodedParser,(req,res) => {
    Task.create({_id: req.body.id}, {
    description: req.body.description,
  status: req.body.status,
  dueOn: req.body.dueOn,
  priority: req.body.priority,
  category: req.body.category
  }, function(err){
    if (err){
      console.log(err)
    }else {
      console.log("Successfully saved")
    }
    res.send("saved")
  })
})


app.post('/add_task',(req,res) => {
  Task.create(req.body,function(error, docs){
  if (error){
    console.log(error)
  }else {
    console.log(docs)
  }
  res.send("saved")
})
})




app.post('/update_task',(req,res) => {
  console.log(req.body)
  Task.updateOne({id: req.body.id}, req.body ,function(error, docs){
  if (error){
    console.log(error)
  }else {
    console.log(docs)
  }
  res.send("saved")
})
})




app.get('/edit_page', (req, res) => {
  res.redirect("/TaskDescription")
  console.log('d')

});
  

app.get('/get_task', (req, res) => {
  res.send()
  console.log('d')

});


app.get('/get_task_detail', (req, res) => {
  Task.find(function(err, users){
    if(err)
      console.log(err)
      else {
        console.log("Data has been sent successfuly")
        res.send(JSON.stringify(users))
      }
    })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});




