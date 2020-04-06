import React, { Component } from "react";

export class UserItemComponent extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
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
  }
}

export default UserItemComponent;
