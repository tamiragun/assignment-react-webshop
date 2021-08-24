import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="selected-nav-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="nav-link"
              activeClassName="selected-nav-link"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shopping"
              className="nav-link"
              activeClassName="selected-nav-link"
            >
              Shopping
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className="nav-link"
              activeClassName="selected-nav-link"
            >
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/legal"
              className="nav-link"
              activeClassName="selected-nav-link"
            >
              Legal
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
