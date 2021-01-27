import "../App.css";
import React, {useState} from "react";
import Task from "./Task";
import SearchBar from "./SearchBar"
import TasksData from '../Tasks.json'
import Sort from './Sort'


const TasksList = () => {

    const [selected, setSelected] = useState("")
    const [input, setInput] = useState("")
    const [isAsc, setIsAsc] = useState(true);
    const [choosenSort, setChoosenSort] = useState("Date")
    const [categorySelected, setCategorySelected] = useState([])

    const changeOption = () => {
        setIsAsc(!isAsc);
    }
    
    function changeColor(id) {
      setSelected(id);
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
      else {
        //TODO: add filter by Category
      }
    }

    return (
      <div className="task-list">
        <Sort choosenSort={choosenSort} setChoosenSort={setChoosenSort} isAsc={isAsc} changeOption={changeOption} categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
        <SearchBar input={input} onChange={setInput}/>
        <div style={{overflow: "scroll", height: "100%"}}>

        {TasksData.filter((val) => {
          if(input == "") {
            return val
          } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
            return val
          }
        }).sort(custom_sort).map(({ name, id, title, priority, category, date }) => (
          <Task
            key={id}
            id={id}
            selected={selected}
            changeColor={changeColor}
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