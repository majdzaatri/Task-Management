import React, {useState, useContext, createContext} from 'react';
import axios from 'axios'
import auth from '../auth';


//Login Box
const Login = (props) => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberMe: false
  });


  const updateField = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const updateCheckField = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = () => {
    axios.post('/login', {
      email: user.email,
      password: user.password
    }).then((response) => {
      if(response.data.auth){
      auth.login(() => props.setIsAuth(true))
      } else {
        console.log("auth failed")
      }
      console.log(response.data);
    }).catch(() => {
      console.log("Error logging user");
    });
  }


  return (
    <div className="inner-container">
      <div className="header">
        Login
      </div>
      <div className="box">

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="email"
            onChange={updateField}
            />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={updateField}/>
        </div>

        <input
         type="checkbox"
         id="rememberMe"
         name="rememberMe"
         onClick={updateCheckField}
         /> Remember Me

        <button
          type="button"
          className="login-btn"
          onClick={handleSubmit}>
          Login</button>
        
          
      </div>
    </div>
  );
}

export default Login;