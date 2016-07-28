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

  constructor(props) {
		super(props);
		this.state = { menuVisible: false };
	}

  logout(e) {
    this.props.logoutUser();
    this.context.router.push('/');
  }

  toggleNav() {
    this.setState({menuVisible: !this.state.menuVisible });
  }

  render() {
    let authenticated = this.props.authenticated;

    return (
      <nav className="navbar">
  	      <div className="container">
  	        <div className="navbar-header">
  	          <button onClick={ e => this.toggleNav() } type="button" className="navbar-toggle" aria-expanded="false" aria-controls="navbar">
  	            <span className="sr-only">Toggle navigation</span>
  	            <span className="icon-bar"></span>
  	            <span className="icon-bar"></span>
  	            <span className="icon-bar"></span>
  	          </button>
              {
                authenticated ?
                <Link className="navbar-brand" to="/my-bucket-list">Bucket List</Link>
                :
                <Link className="navbar-brand" to="/">Bucket List</Link>
              }
  	        </div>
  	        <div id="navbar" className={this.state.menuVisible === false ? "collapse navbar-collapse" : ""}>
              {
                authenticated ?
                <NavLoggedIn />
                :
                ''
              }
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
