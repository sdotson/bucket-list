import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import NavLink from './nav-link';

class Nav extends Component {

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
                  <NavLink to="/logout">Logout</NavLink>
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

export default connect(mapStateToProps)(Nav);
