import React, { Component } from 'react';

import NavLink from './nav-link';

export default class NavLoggedIn extends Component {
  render() {
    return (
      <ul className="nav navbar-nav">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </ul>
    );
  }
}
