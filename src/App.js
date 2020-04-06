import React, { Component, Fragment } from "react";
import NavbarComponent from "../src/components/layouts/NavbarComponent";
import UsersComponent from "./components/users/UsersComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent title="Github Search" />
        <section className="container mt-2">
          <UsersComponent />
        </section>
      </div>
    );
  }
}

export default App;
