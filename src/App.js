import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Brian Sunday";
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        {loading ? <h4>Loading....</h4> : <h1>{showName && name}</h1>}
      </div>
    );
  }
}

export default App;
