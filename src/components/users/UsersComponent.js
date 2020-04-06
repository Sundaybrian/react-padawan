import React, { Component } from "react";
import UserItemComponent from "./UserItemComponent";

export class UsersComponent extends Component {
  render() {
    return (
      <div className="row">
        {this.props.users.map((user) => (
          <UserItemComponent key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default UsersComponent;
