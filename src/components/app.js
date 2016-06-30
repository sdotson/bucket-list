import React, { Component } from 'react';
import List from './list';
import Nav from './nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
    		    <div className="row">
    		        <div className="col-md-8">
                  <List />
                </div>
            </div>
        </div>
      </div>
    );
  }
}
