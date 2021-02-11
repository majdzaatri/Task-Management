import React, {useState} from 'react';
import axios from 'axios'

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

  const handleSubmit = () => {
    axios.post('/signup', {
      fullname: user.fullname,
      email: user.email,
      password: user.password
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="inner-container">
      <div className="header">
        Register
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
            onChange={updateField}
            />
        </div>
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