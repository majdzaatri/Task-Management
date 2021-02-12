import React from "react"
import { FaTimes } from "react-icons/fa"
import '../App.css';
import EditableTaskDescription from './EditableTaskDescription'

const Sidebar = ({isOpen, selectedTask, toggleSidebar, setIsEdit, setTasksCount, tasksCount, setSelectedTask, setIsDeleteTask, userEmail, isEdit}) => {
  
  return <aside className={`sidebar ${isOpen?"show-sidebar":"hide-sidebar"}`}>
    <button className="close-btn" onClick={() => {
      if(isEdit){setIsEdit(!isEdit)}
      toggleSidebar()
      }}>
      <FaTimes />
    </button>
    <EditableTaskDescription
     style={{padding: "0"}} 
     selectedTask={selectedTask} 
     isEdit={isEdit} 
     newTask={false}
     setIsEdit= {setIsEdit}
     setTasksCount = {setTasksCount}
     tasksCount = {tasksCount} 
     selectedTask={selectedTask}
     setSelectedTask = {setSelectedTask}
     setIsDeleteTask = {setIsDeleteTask}
     userEmail = {userEmail} />
  </aside>
}

export default Sidebar