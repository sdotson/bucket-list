import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import NavLink from './nav-link';

import { logoutUser } from '../actions/users';

class Nav extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  logout(e) {
    this.props.logoutUser();
    this.context.router.push('/login');
  }

  render() {
    let authenticated = this.props.authenticated;

    return (
      <nav className="navbar navbar-inverse">
  	      <div className="container">
  	        <div className="navbar-header">
  	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
  	            <span className="sr-only">Toggle navigation</span>
  	            <span className="icon-bar"></span>
  	            <span className="icon-bar"></span>
  	            <span className="icon-bar"></span>
  	          </button>
  	          <a className="navbar-brand" href="#">Bucket List</a>
  	        </div>
  	        <div id="navbar" className="collapse navbar-collapse">
  	          <ul className="nav navbar-nav">
                <NavLink to="/">My Bucket List</NavLink>
  	            <NavLink to="/completed">Completed Items</NavLink>
                {
                  authenticated ?
                  <li><a href="" onClick={e => {e.preventDefault(); this.logout()}}>Logout</a></li>
                  :
                  <NavLink to="/login">Login</NavLink>
                }
  	          </ul>
  	        </div>
  	      </div>
  	    </nav>
    );
  }
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { logoutUser })(Nav);
