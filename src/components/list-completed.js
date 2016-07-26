import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from './list';

export default class ListCompleted extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Completed Items</h1>
        <p><Link to="/">Return to main bucket list</Link></p>
        <List filter={ {completed: true} } />
      </div>
    );
  }
}
