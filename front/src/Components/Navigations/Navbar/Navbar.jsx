import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const DropDownLinks = {
  Buttons: [
    {
      link: "/signup",
      className: "button is-primary",
      text: "Sign up",
      isNavlink: false
    },
    {
      link: "/login",
      className: "button is-success",
      text: "Login",
      isNavlink: false
    },
    {
      link: "/signout",
      className: "button is-error",
      text: "Sign out",
      isNavlink: false
    }
  ],
  Main: [
    {
      link: "/",
      className: "navbar-item",
      text: "Home",
      isNavlink: true
    },
    {
      link: "/campaign",
      className: "navbar-item",
      text: "Campaign",
      isNavlink: true
    },
    {
      link: "/blog",
      className: "navbar-item",
      text: "Blog",
      isNavlink: true
    }
  ],
  Dropdown: [
    {
      link: "/about",
      className: "navbar-item",
      text: "About",
      isNavlink: true
    },
    {
      link: "/jobs",
      className: "navbar-item",
      text: "Jobs",
      isNavlink: true
    },
    {
      link: "/contact",
      className: "navbar-item",
      text: "Contact",
      isNavlink: true
    },
    {
      link: "/report",
      className: "navbar-item",
      text: "Report an issue",
      isNavlink: true
    }
  ]
};

const FindByIndexes = (data, arr = []) => {
  try {
    const tmp = [];
    arr.forEach(i => {
      tmp.push(data[i]);
    });
    return tmp;
  } catch (e) {
    console.log(e);
  }
};

const NavItems = ({ Json }) => {
  return (
    <>
      {Json.map(x => (
        x.isNavlink ?
          <NavLink exact to={x.link} className={x.className} activeStyle={{ backgroundColor: "green" }}>
            {x.text}
          </NavLink>
          :
          <Link to={x.link} className={x.className}>
            {x.text}
          </Link>
      ))}
    </>
  );
};

const NavDropDown = () => {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <div className="navbar-link"> More </div>
      <div className="navbar-dropdown">
        <NavItems Json={FindByIndexes(DropDownLinks.Dropdown, [0, 1, 2])} />
        <hr className="navbar-divider" />
        <NavItems Json={FindByIndexes(DropDownLinks.Dropdown, [3])} />
      </div>
    </div>
  );
};

// @!SHOULD RECIEVE ISLOGGEDIN
// @!SHOULD HANDLE MOBILE VERSION
export default class Navbar extends Component {
  render() {
    return (
      <section>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" >
              <img src="/Logo.svg" width="142" height="28" alt="Capstone"></img>
            </Link>

            <div
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavItems Json={DropDownLinks.Main} />
              <NavDropDown />
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavItems
                    Json={FindByIndexes(DropDownLinks.Buttons, [0, 1])}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}
