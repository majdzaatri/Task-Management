import React from "react"
import { FaAlignRight } from "react-icons/fa"
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../auth';
import { useHistory, useLocation } from "react-router-dom";
import logo from "../smalLogo.png"

const Navbar = ({userName}) => {
  const location = useLocation();
  const history = useHistory();
  const name = location.name;
  console.log(name);
  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await Auth.logout(()=>console.log("logged out"));
      history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }

  return <nav className="navbar">
    <Row className="w-100 align-items-center">
      <Col lg={2} style={{width:'240px'}}> <img style={{width:'240px'}} src={logo} /></Col>
      <Col style={{color: "white", fontSize: "x-large", fontWeight: "bold"  , marginRight:"-20px"}}>
        <Row className="justify-content-end">
            Hello, {userName.split(" ")[0]}
            <button className="ml-5" style={{borderRadius: "5rem", borderColor: "white", backgroundColor: "#3f72af", color: "white"}} onClick={handleSubmit}>
              Logout
            </button>
        </Row>
      </Col>
    </Row>
  </nav>
}

export default Navbar
