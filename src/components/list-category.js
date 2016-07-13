import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from './list';

export default class ListCategory extends Component {
  render() {
    console.log({...this.props.route.filter, categories: [this.props.params.category]});
    return (
      <div>
        <h2>{this.props.params.category} Category</h2>
        <p><Link to="items/new"><span className="glyphicon glyphicon-plus"></span> Add New Item</Link></p>
        <List filter={{...this.props.route.filter, categories: [this.props.params.category]}} />
      </div>
    );
  }
}
