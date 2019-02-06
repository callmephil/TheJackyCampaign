import React, { Component } from "react";
import { withRouter, Route, Switch, Link } from "react-router-dom";
// import "./App.css";
/* AUTH */
import * as auth0Client from "./Utils/Auth/Auth";
import SecuredRoute from './Utils/Routing/SecuredRoute';

/* NOTIFICATIONS */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pause, makeRequestUrl } from "./Utils/Utils.js";

import Home from './Components/Pages/Home/Home'
// const makeUrl = (path, params) =>
//   makeRequestUrl(`http://localhost:8080/${path}`, params);

class App extends Component {
  render() {
    return (
      <Switch>
        <Home />
        <Route path="/" exact render={()=> <div> Home Page </div>} />
        {/* <Route path="/callback" render={this.handleAuthentication} /> */}
        <Route render={() => <div>not found!</div>} />
      </Switch>
    );
  }
} 


export default withRouter(App);
