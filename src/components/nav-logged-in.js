import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavLink from './nav-link';

export default class NavLoggedIn extends Component {
  render() {
    return (
      <ul className="nav navbar-nav">
        <NavLink to="/completed">Completed Items</NavLink>
      </ul>
    );
  }
}
