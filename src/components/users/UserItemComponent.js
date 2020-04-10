import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItemComponent = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center col-md-4 ">
      <img src={avatar_url} className="card-img-top" alt="" />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          rel="nooponer norefer"
          className="btn btn-primary btn-sm"
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItemComponent.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItemComponent;
