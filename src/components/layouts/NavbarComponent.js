import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <div>
      <nav className="navbar bg-light">
        <a className="navbar-brand">
          <i className="fab fa-github" />
          {props.title}
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavbarComponent.defaultProps = {
  title: "Github Finder",
};

NavbarComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavbarComponent;
