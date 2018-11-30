import React, { Component } from 'react';
import './App.css';
import 'material-design-icons/iconfont/material-icons.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import RegisterController from './components/register/RegisterContainer.js'
import LoginController from './components/login/LoginContainer.js'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              {/* <Header /> */}
            </div>
            <div className="container">
              <Route exact path="/register" component={RegisterController} />
              <Route exact path="/login" component={LoginController} />
            </div>
          </div>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
