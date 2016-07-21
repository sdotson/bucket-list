import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from './list';

export default class ListCategory extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.category} Category</h2>
        <p><Link to="/">Return to main bucket list</Link></p>
        <p><Link to="items/new"><span className="glyphicon glyphicon-plus"></span> Add New Item</Link></p>
        <List filter={{completed: false, categories: [this.props.params.category]}} />
      </div>
    );
  }
}
