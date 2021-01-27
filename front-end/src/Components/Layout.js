import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = ({ children}) => {

    const [isOpen, setIsOpen] = React.useState(false);


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      }

    return (
        <>
            <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {children}
        </>
    )
}

export default Layout
