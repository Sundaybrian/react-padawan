import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="mb-3">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="search user..."
              className="form-control"
              name="text"
              value={this.state.text}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-block">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
