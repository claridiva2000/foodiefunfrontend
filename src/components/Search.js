import React, { Component } from 'react';
import { SEARCH } from '../actions';

import store from '../Store';

export class Search extends Component {
  state = {};

  handleChange = e => {
    store.dispatch({ type: SEARCH, payload: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;


