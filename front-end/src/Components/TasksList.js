import "../App.css";
import React, {useEffect, useState} from "react";
import Task from "./Task";
import SearchBar from "./SearchBar"
// import TasksData from '../Tasks.json'
import Sort from './Sort'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap"
import axios from 'axios'



const TasksList = ({setSelectedTask, toggleSidebar}) => {

    const [selected, setSelected] = useState("")
    const [input, setInput] = useState("")
    const [isAsc, setIsAsc] = useState(true);
    const [choosenSort, setChoosenSort] = useState("Date")
    const [categorySelected, setCategorySelected] = useState([])

    const changeOption = () => {
        setIsAsc(!isAsc);
    }

    
const [TasksData, setTasksData] = useState([])

const getTasks = () => {
axios.get('/get_task_detail')
.then((response) => {
  setTasksData(response.data)
}).catch(() => {
  alert('Error retrieving data!!!');
});
}

useEffect(() =>{
  getTasks();
}, [])


    function changeColor(id,title,name,taskPriority,category,date) {
      setSelected(id);
      setSelectedTask({id,title,name,taskPriority,category,date});
    };

    function custom_sort(a, b) {
      if(choosenSort == "Date"){
        if(isAsc)
          return new Date(a.date) - new Date(b.date);
        else
          return new Date(b.date) - new Date(a.date);
      }
      else if(choosenSort == "Priority"){
        if(isAsc)
          return a.priority - b.priority;
        else
          return b.priority - a.priority;
      }
    }

    function custom_filter(val) {
      if(input == "" && categorySelected.length <=0) {
        return val
      } else if(categorySelected.length > 0) {
        if(input == ""){
          for(var i=0; i<categorySelected.length;i++){
            if(val.category.toLowerCase().includes(categorySelected[i].toLowerCase())){
              return val
            }
          }
        } else {
          for(var i=0; i<categorySelected.length;i++){
            if(val.category.toLowerCase().includes(categorySelected[i].toLowerCase()) && val.name.toLowerCase().includes(input.toLowerCase()))
              return val
          }
        }
      } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
        return val
      }
    }

    return (
      <div className="task-list">
        <Sort 
          choosenSort={choosenSort}
          setChoosenSort={setChoosenSort}
          isAsc={isAsc}
          changeOption={changeOption}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          />

        <Row className="mx-3 mt-1">
          <SearchBar input={input}  onChange={setInput}/>
        </Row>
        <div style={{overflow: "scroll", height: "100%"}}>

        {TasksData.filter(custom_filter).sort(custom_sort).map(({ name, id, title, priority, category, date }) => (
          <Task
            key={id}
            id={id}
            selected={selected}
            changeColor={changeColor}
            toggleSidebar={toggleSidebar}
            name={name}
            title={title}
            taskPriority={priority}
            category={category}
            date={date}
          />
        ))}
        </div>
      </div>
    );
}

export default TasksList