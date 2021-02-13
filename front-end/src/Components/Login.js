import React, {useState} from 'react';
import axios from 'axios'
import auth from '../auth';
import validator from 'email-validator';


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

  const handleEmail = e => {
    setIsValidEmail(validator.validate(user.email))
  }

  const handlePassowrd = e => {
    setIisValidPassword(user.password.length >4 ? true : false) 
   }

  const  [isValidEmail, setIsValidEmail] = useState(true)
  const  [isValidPassword, setIisValidPassword] = useState(true)
  const  [isAuth, setIsAuth] = useState(true)




  const handleSubmit = () => {
    setIsValidEmail(validator.validate(user.email))
    setIisValidPassword(user.password.length >5 ? true : false)
    setIsAuth(true)
    if (isValidEmail && isValidPassword){
    axios.post('/login', {
      email: user.email,
      password: user.password
    }).then((response) => {
      if(response.data.auth){
      auth.login(() => props.setIsAuth(true));
      props.setUserEmail(response.data.email);
      props.setUserName(response.data.name);
      } else {
        console.log("auth failed")
        setIsAuth(false)
      }
      console.log(response.data);
    }).catch(() => {
      console.log("Error logging user");
    });
  }
}


  return (
    <div className="inner-container">
      <div className="header">
        <h1>Login</h1>
      </div>
      <div className="box">

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="email"
            onChange={(e) =>{updateField(e)
            handleEmail()
            }}
            />
             {(!isValidEmail)? <small class="text-danger">Please enter a valid email</small>:
             <div> </div>
             }
            
             
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) =>{updateField(e)
              handlePassowrd()
            }}/>
           {(!isValidPassword)? <small class="text-danger">Please enter a password with at least 6 characters</small>:
           <div> </div>}
        </div>


        {(!isAuth)? <p class="font-weight-bold text-danger">The email or password is inccorect</p>:
        <div> </div>}
        {/* <input
         type="checkbox"
         id="rememberMe"
         name="rememberMe"
         onClick={updateCheckField}
         /> Remember Me */}

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