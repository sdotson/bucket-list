import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import NavLink from './nav-link';
import NavLoggedIn from './nav-logged-in';
import NavLoggedOut from './nav-logged-out';
import { logoutUser } from '../actions/users';

class Nav extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  logout(e) {
    this.props.logoutUser();
    this.context.router.push('/');
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
              {
                authenticated ?
                <NavLink className="navbar-brand" to="/my-bucket-list">Bucket List</NavLink>
                :
                <NavLink className="navbar-brand" to="/">Bucket List</NavLink>
              }
  	        </div>
  	        <div id="navbar" className="collapse navbar-collapse">
  	          <ul className="nav navbar-nav">
                {
                  authenticated ?
                  <NavLoggedIn />
                  :
                  ''
                }
  	          </ul>
              <ul className="nav navbar-nav navbar-right">
                {
                  authenticated ?
                  <li><a href="" onClick={e => {e.preventDefault(); this.logout()}}>Logout</a></li>
                  :
                  <NavLoggedOut />
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
