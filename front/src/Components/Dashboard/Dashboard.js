import React, { Component } from 'react';
import { withRouter, Route, Switch, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from './Navigation/Sidebar';
import BlogFinal from './Blog/BlogFinal';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar /> 

                <div className= "w3-container" style={{border: "2px solid black", borderRadius: "5px", marginLeft:"70px"}} >
                <Switch>
                    {/* <Route path="/admin" render={()=> <Dashboard />} /> */}
                    <Route path="/admin/campaign" exact render = {()=> <div> Testuing </div>} />
                    <Route path="/admin/blog" exact render={()=> <BlogFinal editMode={ true }/> } />
                    <Route path="/admin/users" exact render={()=> <div> test is active </div>} />
                </Switch>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default withRouter(Dashboard);
  
  