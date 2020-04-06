import React, { Component, Fragment } from "react";
import NavbarComponent from "../src/components/layouts/NavbarComponent";
import UsersComponent from "./components/users/UsersComponent";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: true,
  };

  async componentDidMount() {
    // make github request
    const res = await axios.get("https://api.github.com/users");

    console.log(res.data);

    this.setState({ users: res.data.slice(0, 6), loading: false });
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent title="Github Search" />
        <section className="container mt-2">
          <UsersComponent
            loading={this.state.loading}
            users={this.state.users}
          />
        </section>
      </div>
    );
  }
}

export default App;
