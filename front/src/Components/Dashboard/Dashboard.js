import React, { Component } from 'react';
import { withRouter, Route, Switch, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from './Navigation/Sidebar';

import Blogpanel from './Blog/Blogpanel';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar /> 

                <Switch>
                <div className= "w3-container" style={{border: "2px solid black", borderRadius: "5px", marginLeft:"70px"}}>
                    {/* <Route path="/admin" render={()=> <Dashboard />} /> */}
                    <Route path="/admin/campaign" exact render={()=>  <div>  admin campaign is active </div>} />
                    <Route path="/admin/blog" exact render={()=>  <Blogpanel />} />
                    <Route path="/admin/users" exact render={()=> <div> test is active </div>} />
                </div>
                </Switch>
                <ToastContainer />
            </div>
        );
    }
}

export default withRouter(Dashboard);
  
  