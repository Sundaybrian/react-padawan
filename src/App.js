import React, { Component, Fragment } from "react";
import NavbarComponent from "../src/components/layouts/NavbarComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent title="Github Search" />
      </div>
    );
  }
}

export default App;
