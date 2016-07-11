import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from './list';

export default class ListCompleted extends Component {
  render() {
    return (
      <List done={true} />
    );
  }
}
