import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({children, selectedTask, userName, isOpen, toggleSidebar}) => {

    return (
        <>
            <Navbar userName={userName}/>
            {children}
        </>
    )
}

export default Layout
