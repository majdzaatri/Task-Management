import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = ({children, selectedTask}) => {

    const [isOpen, setIsOpen] = React.useState(false);


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      }

    return (
        <>
            <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} selectedTask={selectedTask} toggleSidebar={toggleSidebar} />
            {children}
        </>
    )
}

export default Layout
