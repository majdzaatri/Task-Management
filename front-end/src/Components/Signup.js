import React, {useState} from 'react';
import axios from 'axios'
import validator from 'email-validator';

//Register Box 
const Signup = () => {

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const updateField = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const  [isValidEmail, setIsValidEmail] = useState(true)
  const  [isValidPassword, setIisValidPassword] = useState(true)
  const  [isAuth, setIsAuth] = useState(true)
  const  [registered, setRegistered] = useState(true)

  const handleEmail = e => {
    setIsValidEmail(validator.validate(user.email))
  }

  const handlePassowrd = e => {
    setIisValidPassword(user.password.length >5 ? true : false) 
   }

  const handleSubmit = () => {
    setIsValidEmail(validator.validate(user.email))
    setIisValidPassword(user.password.length >5 ? true : false)
    setIsAuth(true)
    if (isValidEmail && isValidPassword){
      axios.post('/signup', {
      fullname: user.fullname,
      email: user.email,
      password: user.password
    }).then((response) => {
      console.log(response.data)
      if(response.data === "user is already exist"){
      setIsAuth(false)
      setRegistered(true)
  
    }
      else{
        setIsAuth(true)
        setRegistered(false)
      }
    }).catch((err) => {
      setIsAuth(false)
      console.log(err);
    })
  }
}

  return (
    <div className="inner-container">
      <div className="header">
        <h1>Register</h1>
      </div>
      <div className="box">

        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullname"
            className="login-input"
            placeholder="Enter Full Name"
            onChange={updateField}
            />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text"
            name="email" 
            className="login-input" 
            placeholder="Email"
            onChange={(e) =>{updateField(e)
            handleEmail()
            }}
            />
        </div>
        {(!isValidEmail)? <small class="text-danger">Please enter a valid email</small>:
             <div> </div>
             }

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) =>{updateField(e)
            handlePassowrd()
            }}
            />
        </div>
        {(!isValidPassword)? <small class="text-danger">Please enter a password with at least 6 characters</small>:
           <div> </div>}

           {(!isAuth)? <p class="font-weight-bold text-danger">The email is alreadt exist</p>:
        <div> </div>}
        {(!registered)? <p class="font-weight-bold text-success">The email has been created successfully</p>:
        <div> </div>}

        <button
          type="button"
          className="login-btn"
          onClick={handleSubmit}
          >Register</button>
      </div>
    </div>
  );
}

export default Signup;