import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import './Sidebar.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollasped: false
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        const collapse = !this.state.isCollasped;
        this.setState({ isCollasped: collapse });
    }

    render() {
        let toggleClassName = !this.state.isCollasped ? "main-menu" : "main-menu main-menu-expand";
        const Links = [
            {
                link:"/admin/campaign",
                icon:"fa fa-2x fa-home",
                text:"Home",
                position: ""
            },
            {
                link:"/admin/blog",
                icon:"fa fa-2x fa-home",
                text:"Test 3",
                position: ""
            },
            {
                link:"/admin/users",
                icon:"fa fa-2x fa-home",
                text:"Test 3",
                position: ""
            },
            {
                link:"/#",
                icon:"fa fa-2x fa-power-off",
                text:"Logout",
                position: "logout"
            },
        ];
        return (
            <div>
                <div className="area">
                    <nav className={toggleClassName}>
                        <div>
                            <li>
                                <a className="main-menu-expand-color" onClick={this.toggleCollapse}>
                                    <i className="fa fa-2x">☰</i>
                                    <span className="nav-text">
                                        Collapase menu
                                </span>
                                </a>
                            </li>
                        </div>
                        {Links.map((x, i) => (
                        <ul className={x.position} key={i}>
                            <li>
                                <NavLink to={x.link} activeStyle={{ color: "red" }}>
                                    <i className={x.icon} />
                                    <span className="nav-text">
                                        {x.text}
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                        ))}
                    </nav>
                </div>

                {/* <div Style="margin-left:70px">
                    <div className="w3-container">
                    <h2>Sidebar Icons</h2>
                    <p>Finally Responsive. How do we do active menu ?</p>
                    </div>
                </div> */}

            </div>
        )
    }
}