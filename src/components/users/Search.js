import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    clearUsers: PropTypes.func.isRequired,
    searchUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onSubmit(e) {
    e.preventDefault();
    // passing up the search value to the parent
    this.props.searchUsers(this.state.text);
    // emptying the search box
    this.setState({ text: "" });
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
        {/* if showclear is true render the clear button */}
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
