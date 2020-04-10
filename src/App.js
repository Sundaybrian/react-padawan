import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "../src/components/layouts/NavbarComponent";
import UsersComponent from "./components/users/UsersComponent";
import User from "./components/users/User.js";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
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

  getUser = async (username) => {
    // fetching a single user
    this.setState({ loading: false });

    const res = await axios.get(`https://api.github.com/users/${username}`);

    this.setState({ user: res.data, loading: false });
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
      <Router>
        <div className="App">
          <NavbarComponent title="Github Search" />
          <section className="container mt-2">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
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
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    user={this.state.user}
                    getUser={this.getUser}
                    {...props}
                  />
                )}
              />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
