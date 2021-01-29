import React from "react"
import { FaTimes } from "react-icons/fa"
import '../App.css';
import EditableTaskDescription from './EditableTaskDescription'

const Sidebar = ({isOpen, selectedTask, toggleSidebar}) => {
  
  return <aside className={`sidebar ${isOpen?"show-sidebar":"hide-sidebar"}`}>
    <button className="close-btn" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div >
      <div onClick={toggleSidebar}>
        <EditableTaskDescription selectedTask={selectedTask} isEdit={false} newTask={false}/>
      </div>
    </div>
  </aside>
}

export default Sidebar