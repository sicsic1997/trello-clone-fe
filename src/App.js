import React, { Component } from 'react';
import './App.css';
import 'material-design-icons/iconfont/material-icons.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import RegisterController from './components/register/RegisterController.js'
import LoginController from './components/login/LoginController.js'
import TeamsController from './components/teams/TeamsController.js'
import TeamDetailsController from './components/team-details/TeamDetailsController.js'
import Landing from './components/landing/landing.js'
import HeaderController from './components/header/HeaderController.js'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div className="row">
              <HeaderController />
            </div>
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={RegisterController} />
              <Route exact path="/login" component={LoginController} />
              <Route exact path="/teams" component={TeamsController} />
              <Route  path="/team-details/:teamId?/:mode?" component={TeamDetailsController} />
            </div>
          </div>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
