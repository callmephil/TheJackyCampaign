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

/* MENUS */
import Navbar from './Components/Navigations/Navbar/Navbar';
import Footer from './Components/Navigations/Footer/Footer';
/* PAGES */
import Home from './Components/Pages/Home/Home';
// import Blog from './Components/Pages/Blog/Blog';
import Campaign from './Components/Pages/Campaigns/Campaign';
import ForOFor from './Components/Pages/404';
import Dashboard from './Components/Dashboard/Dashboard'
import Blog from './Components/Dashboard/Blog/BlogFinal'

// const makeUrl = (path, params) =>
//   makeRequestUrl(`http://localhost:8080/${path}`, params);

class App extends Component {
  render() {
    return (
      <div>
        { 
          this.props.location.pathname.includes("/admin") ?
            <Switch>
              <Route path="/admin" render={()=> <Dashboard />} />
            </Switch>
          :
          <>
            <Navbar />
            <Switch>
              <Route path="/" exact render={()=> <Home />} />
              <Route path="/campaign" exact render={()=> <Campaign />} />
              {/* <Route path="/blog" exact render={()=> <Blog />} /> */}
              <Route path="/blog" exact render={()=> <Blog editMode={ false }/> } />
              {/* <Route path="/callback" render={this.handleAuthentication} /> */}
              <Route render={() => <div> <ForOFor /> </div>} />
            </Switch>
            <Footer />
            <ToastContainer />
          </>
        }
      </div>
    );
  }
} 


export default withRouter(App);
