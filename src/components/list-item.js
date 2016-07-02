import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ListItem extends Component {
  render() {
    return (
      <li className="list-group-item clearfix {item.expanded ? 'active' : ''}" key={this.props.id}>
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
      <span className="glyphicon glyphicon-chevron-up"></span>
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
