import React, { Component } from "react";
import { Link } from "react-router-dom";

const DropDownLinks = {
  Buttons: [
    {
      link: "/signup",
      className: "button is-primary",
      text: "Sign up"
    },
    {
      link: "/login",
      className: "button is-success",
      text: "Login"
    },
    {
      link: "/signout",
      className: "button is-error",
      text: "Sign out"
    }
  ],
  Main: [
    {
      link: "/",
      className: "navbar-item",
      text: "Home"
    },
    {
      link: "/campaign",
      className: "navbar-item",
      text: "Campaign"
    },
    {
      link: "/blog",
      className: "navbar-item",
      text: "Blog"
    }
  ],
  Dropdown: [
    {
      link: "/about",
      className: "navbar-item",
      text: "About"
    },
    {
      link: "/jobs",
      className: "navbar-item",
      text: "Jobs"
    },
    {
      link: "/contact",
      className: "navbar-item",
      text: "Contact"
    },
    {
      link: "/report",
      className: "navbar-item",
      text: "Report an issue"
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
