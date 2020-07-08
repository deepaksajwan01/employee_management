import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../static/styles/navigation.css";
const { NavBar, Icon } = require("precise-ui");
const navItems = [
  {
    id: "1",
    content: (
      <Link to="/" className="nav-link">
        <Icon name="Home" />
        <span>Home</span>
      </Link>
    ),
    display: "pin",
  },
  {
    id: "2",
    content: (
      <Link to="/addEmployee" className="nav-link">
        <Icon name="Person" />
        <span>Add New</span>
      </Link>
    ),
    display: "pin",
  },
];
class Navigation extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <NavBar
          className="navBar"
          style={{ margin: "0px", padding: "0" }}
          items={navItems}
          mode="full"
        />
      </div>
    );
  }
}

export default Navigation;
