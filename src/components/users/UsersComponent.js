import React, { Component } from "react";
import UserItemComponent from "./UserItemComponent";
import Spinner from "../layouts/Spinner";

const UsersComponent = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="row">
        {users.map((user) => (
          <UserItemComponent key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default UsersComponent;
