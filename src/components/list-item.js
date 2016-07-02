import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandItem } from '../actions/index';

class ListItem extends Component {
  determineClass() {
    return this.props.expanded ? 'list-group-item clearfix active' : 'list-group-item clearfix';
  }

  render() {
    return (
      <li className={this.determineClass()} key={this.props.id}>
      <div className="clearfix">
      <h4 className="pull-left">{this.props.title}</h4>
      <div className="btn-group pull-right">
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-remove"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-ok"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-chevron-up" onClick={() => this.props.expandItem(this.props.id) }></span>
      </button>
      </div>
      </div>
      <hr />
      <div>
      <h5>Description</h5>
      <p>
      {this.props.description}
      </p>
      <p>
      Added February 2, 2015.
      </p>
      </div>
      <hr />
      <h5>Categories</h5>
      <span className="label label-default">Default</span>
      <span className="label label-default">Default</span>
      <span className="label label-default">Default</span>
      </li>
    );
  }
}

export default connect(null, { expandItem })(ListItem);
