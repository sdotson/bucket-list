import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import NavLink from './nav-link';
import { logoutUser } from '../actions/users';

class NavLoggedIn extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  logout(e) {
    this.props.logoutUser();
    this.context.router.push('/');
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        <NavLink to="/completed">Completed Items</NavLink>
        <li><a href="" onClick={e => {e.preventDefault(); this.logout()}}>Logout</a></li>
      </ul>
    );
  }
}

export default connect(null, { logoutUser })(NavLoggedIn);
