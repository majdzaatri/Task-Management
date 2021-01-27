import React from "react"
import { FaTimes } from "react-icons/fa"
import '../App.css';

const Sidebar = ({isOpen, toggleSidebar}) => {
  
  return <aside className={`sidebar ${isOpen?"show-sidebar":"hide-sidebar"}`}>
    <button className="close-btn" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div >
      <div onClick={toggleSidebar}>
        <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
      </div>
    </div>
  </aside>
}

export default Sidebar