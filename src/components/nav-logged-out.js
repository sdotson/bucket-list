import React from 'react';

import NavLink from './nav-link';

export default (props) => {
  return (
    <ul className="nav navbar-nav">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </ul>
  );
}
