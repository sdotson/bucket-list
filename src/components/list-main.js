import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from './list';

export default class ListMain extends Component {
  render() {
    return (
      <div>
        <h2>My Bucket List</h2>
        <p><Link to="items/new"><span className="glyphicon glyphicon-plus"></span> Add New Item</Link></p>
        <List filter={this.props.route.filter} />
      </div>
    );
  }
}
