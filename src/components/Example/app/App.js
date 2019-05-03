import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom"
import {
  About,
  Home,
  HelloWorld,
} from "../index"

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/home" component={HelloWorld} />
          <Route path="/about" component={About} />
          {/* <Route path="/home/:param1" component={Home} /> */} {/* Route Param */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

