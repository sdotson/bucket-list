import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandItem, completeItem, deleteItem } from '../actions/index';

import moment from 'moment';

class ListItem extends Component {
  determineItemClass() {
    return this.props.expanded ? 'list-group-item clearfix active' : 'list-group-item clearfix';
  }

  determineButtonClass() {
    return this.props.expanded ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down';
  }

  render() {
    return (
      <li className={this.determineItemClass()} key={this.props.key}>
        <div className="clearfix">
          <h4 className="pull-left">{this.props.title}</h4>
          <div className="btn-group pull-right">
            <button type="button" className="btn btn-default" onClick={() => this.props.deleteItem(this.props.id)}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
            <button type="button" className="btn btn-default" onClick={() => this.props.completeItem(this.props.id)}>
              <span className="glyphicon glyphicon-ok"></span>
            </button>
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
            <button type="button" className="btn btn-default" onClick={() => this.props.expandItem(this.props.id) }>
              <span className={this.determineButtonClass()}></span>
            </button>
          </div>
        </div>
        <div className="details">
          <div>
            <hr />
            <h5>Description</h5>
            <p>
            {this.props.description}
            </p>
            <p>
            Added {moment(this.props.added).format('dddd, MMMM Do, YYYY')}.
            </p>
          </div>
          <hr />
          <h5>Categories</h5>
          {this.props.categories.map((c) =>
            <span className="label label-default" key={c}>{c}</span>
          )}
        </div>
      </li>
    );
  }
}

export default connect(null, { expandItem, completeItem, deleteItem })(ListItem);
