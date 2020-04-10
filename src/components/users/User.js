import React, { Component, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    // fetch the username from the url
    // call the getUser method to get user details
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      login,
      bio,
      blog,
      public_gists,
      html_url,
      location,
      hireable,
      avatar_url,
      followers,
      following,
      public_repos,
    } = this.props.user;

    const { loading } = this.props;
    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/">Back to Search</Link>
        Hireable:{hireable}
        <div className="row">
          <div className="col-md-8 ">
            <div className="card">
              <img src={avatar_url} alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">{login}</h4>
                <p className="card-text">{bio}</p>
                <a href={html_url} className="btn btn-dark">
                  See Github profile Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12"></div>
        </div>
      </Fragment>
    );
  }
}

export default User;
