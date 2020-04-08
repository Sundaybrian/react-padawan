import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="search user..."
              className="form-control"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
