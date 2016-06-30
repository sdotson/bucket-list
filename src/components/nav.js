import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
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
  	            <li className="active"><a href="#">My Bucket List</a></li>
  	            <li><a href="#">Completed Items</a></li>
  	            <li><a href="#">Logout</a></li>
  	          </ul>
  	        </div>
  	      </div>
  	    </nav>
    );
  }
}
