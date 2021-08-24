import React from "react";
import logo from "../assets/logo.png";
import "./header.css";

export class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <img src={logo} alt="Logo" height="85px" />
        <h1>Handy kitchen appliances</h1>
        <h3>{this.props.loggedIn ? "Welcome!" : "Please log in."}</h3>
      </header>
    );
  }
}

Header.defaultProps = { loggedIn: false };
