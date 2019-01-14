import React, { Component } from 'react';
import './App.css';
import 'material-design-icons/iconfont/material-icons.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import RegisterContainer from './components/register/RegisterContainer.js'
import LoginContainer from './components/login/LoginContainer.js'
import TeamsContainer from './components/teams/view/TeamsContainer.js'
import Landing from './components/landing/landing.js'
import HeaderContainer from './components/header/HeaderContainer.js'
import TeamCreateContainer from './components/teams/create/TeamCreateContainer.js'
import TeamEditContainer from './components/teams/edit/TeamEditContainer.js'
import TeamDetailsContainer from './components/teams/details/TeamDetailsContainer.js'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div className="row">
              <HeaderContainer />
            </div>
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/login" component={LoginContainer} />

              <Route exact path="/teams" component={TeamsContainer} />
              <Route exact path="/team/create" component={TeamCreateContainer} />
              <Route exact path="/team/edit/:teamId" component={TeamEditContainer} />
              <Route exact path="/team/details/:teamId" component={TeamDetailsContainer} />
            </div>
          </div>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
