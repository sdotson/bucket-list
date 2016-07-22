import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from './list';

export default class ListCategory extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">{this.props.params.category} Category</h1>
        <p><Link to="/">Return to main bucket list</Link></p>
        <p><Link to="items/new"><span className="glyphicon glyphicon-plus"></span> Add New Item</Link></p>
        <List filter={{completed: false, categories: [this.props.params.category]}} />
      </div>
    );
  }
}
