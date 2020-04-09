import React, { Component, Fragment } from "react";
import NavbarComponent from "../src/components/layouts/NavbarComponent";
import UsersComponent from "./components/users/UsersComponent";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: true,
    alert: null,
  };

  async componentDidMount() {
    // make github request
    const res = await axios.get("https://api.github.com/users");

    console.log(res.data);

    this.setState({ users: res.data.slice(0, 6), loading: false });
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  showAlert = (msg, type) => {
    // setting alert state
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };

  render() {
    return (
      <div className="App">
        <NavbarComponent title="Github Search" />
        <section className="container mt-2">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            showAlert={this.showAlert}
          />
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
