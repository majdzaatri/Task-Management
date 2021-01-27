import React from "react"
import { FaAlignRight } from "react-icons/fa"
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <Row className="w-100 align-items-center">
      <Col>
        <div>
            <button type="button" className="toggle-btn" onClick={toggleSidebar} >
                <FaAlignRight/>
            </button>
        </div>
      </Col>
      <Col style={{color: "white", fontSize: "x-large", fontWeight: "bold"}}>
        <Row className="justify-content-end">
            Hello, Guest
        </Row>
      </Col>
    </Row>
  </nav>
}

export default Navbar
