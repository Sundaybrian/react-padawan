import React, { Component } from "react";
import PropTypes from "prop-types";

const NavbarComponent = (props) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <a className="navbar-brand">
          <i className="fab fa-github" />
          {props.title}
        </a>
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
