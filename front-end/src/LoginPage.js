import React, {useState, useEffect} from 'react'
import Login from './Components/Login'
import Register from './Components/Signup'
import {Row, Col, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png"


const LoginPage = (props) => {

    const [isLogin, setIsLogin] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState("Guest")
    const [userEmail, setUserEmail] = useState("")

    const showLogin = () => {
        if (isLogin != true){
            setIsLogin(true)
        }
    }

    const showRegister = () => {
        if (isLogin == true){
            setIsLogin(false)
        }
    }

    useEffect(() => {
        if(isAuth){
            props.history.push({pathname: "/home", state: {name: userName, email: userEmail}});
        }
    }, [userName])
    

    return(
        <Row className="background" style={{margin: "0", height: "100vh"}}>
            <Col>
            <Row className="justify-content-center" style={{marginBottom: "-100px"}}>
                <img src={logo} alt="Logo" />
            </Row>
            <Row className="box-controller justify-content-center mx-auto mb-1">
                <div
                    className={"controller " + ((isLogin)
                    ? "selected-controller"
                    : "")}
                    onClick={showLogin}>
                    Login
                </div>
                <div
                    className={"controller " + ((!isLogin)
                    ? "selected-controller"
                    : "")}
                    onClick={showRegister}>
                    Register
                </div>
            </Row>
            <Row className="align-items-center justify-content-center m-auto background-row">
                {(!isLogin)? <Register />:<Login setIsAuth={setIsAuth} setUserName={setUserName} setUserEmail={setUserEmail}/>}
            </Row>
            </Col>
        </Row>
    )

};

export default LoginPage;