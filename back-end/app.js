const express = require('express')
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
const port = 8000;


const users = new mongoose.Schema ({
  firstName : String, 
  lastName : String, 
  email : String,
  password : String
}); 

const tasks = new mongoose.Schema ({
  description: String,
  status: String,
  dueOn: String,
  priority: String,
  category: String,
}); 


const User = mongoose.model("User", users);
const Task = mongoose.model("Task", tasks);

// const user = new User ({
//   firstName: "Fadi",
//   lastName: "Habeeb",
//   email: "fadi@fafa",
//   password: "123"
// }); 


// const task = new Task ({
//   description: "Finish the first 3 exams",
//   status: "new",
//   dueOn: "jun, 21, 2020 12:00:00 AM",
//   priority: "*******",
//   category: "art",
// }); 

// user.save()
// task.save()


User.find(function(err, users){
if(err)
  console.log(err)
  else {
  }
})


var urlencodedParser = bodyParser.urlencoded({ extended: false })




// router.route('/save_data').post((req,res) => {
//   console.log("Ffff")
//   console.log(req.body.description)

// })


app.post('/save_data', urlencodedParser,(req,res) => {
    Task.updateOne({_id: req.body.id}, {
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


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/edit_page', (req, res) => {
  res.redirect("/TaskDescription")
});
  

app.get('/get_task', (req, res) => {
  res.send()
});


app.get('/get_task_detail', (req, res) => {
  Task.find(function(err, users){
    if(err)
      console.log(err)
      else {
        // console.log(JSON.stringify(users))
        res.send(JSON.stringify(users))
      }
    })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});




