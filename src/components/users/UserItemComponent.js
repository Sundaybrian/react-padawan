import React, { Component } from "react";
import PropTypes from "prop-types";

const UserItemComponent = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center col-md-4 ">
      <img src={avatar_url} className="card-img-top" alt="" />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          rel="nooponer norefer"
          className="btn btn-primary btn-sm"
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItemComponent.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItemComponent;
