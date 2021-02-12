import './App.css';
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './LoginPage';
import HomePage from './HomePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/home" component={HomePage} exact />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  )

}

export default App;
