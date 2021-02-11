import React, {useState} from 'react'
import Login from './Components/Login'
import Register from './Components/Signup'
import {Row, Col, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


const LoginPage = (props) => {

    const [isLogin, setIsLogin] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

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

    if(isAuth){
        props.history.push("/home");
    }

    return(
        <Row className="background" style={{margin: "0", height: "100vh"}}>
            <Col>
            <Row className="box-controller justify-content-center mx-auto mt-5 mb-1">
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
                {(!isLogin)? <Register />:<Login setIsAuth={setIsAuth} />}
            </Row>
            </Col>
        </Row>
    )

};

export default LoginPage;