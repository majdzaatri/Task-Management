import React, {useState, useEffect} from 'react'
import Login from './Components/Login'
import Register from './Components/Signup'
import {Row, Col, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png"
import ParticlesBg from 'particles-bg'


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
    

    let config = {
        num: [4, 20],
        rps: 0.05,
        radius: [5, 90],
        life: [9, 3],
        v: [8, 3],
        tha: [-40, 40],
        alpha: [1, 8],
        scale: [.1, 0.4],
        position: "all",
        color: ["random", "#ffffff"],
        cross: "dead",
        // emitter: "follow",
        random: 30
      };
  
      if (Math.random() > 0.85) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }

    return(
        <>
        <div>
        
        <Row style={{backgroundColor: "rgba(0,0,250,0.7)", margin: "0", height: "100vh"}}>
        <ParticlesBg type="custom" config={config} bg={true}/>
            <Col>
                <Row className="justify-content-center" style={{marginBottom: "-200px", marginTop: "50px"}}>
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
        </div>
        </>
        
    )

};

export default LoginPage;