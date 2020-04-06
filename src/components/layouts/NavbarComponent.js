import React, { Component } from "react";
import PropTypes from "prop-types";

export class NavbarComponent extends Component {
  static defaultProps = {
    title: "Github Finder",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <a className="navbar-brand">
            <i className="fab fa-github" />
            {this.props.title}
          </a>
        </nav>
      </div>
    );
  }
}

export default NavbarComponent;
