import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from './list';

export default class ListMain extends Component {
  render() {
    return (
      <div>
        <p><Link to="items/new">Add New Item</Link></p>
        <List done={false} />
      </div>
    );
  }
}
