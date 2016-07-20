import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { expandItem } from '../actions/index';
import { deleteItem, editItem, completeItem } from '../actions/items';

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
            <button type="button" className="btn btn-default" onClick={() => this.props.deleteItem(this.props._id)}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
            <button type="button" className="btn btn-default" onClick={() => this.props.completeItem(this.props)}>
              <span className="glyphicon glyphicon-ok"></span>
            </button>
            <button type="button" className="btn btn-default">
              <Link to={"/items/" + this.props._id + "/edit"}><span className="glyphicon glyphicon-pencil"></span></Link>
            </button>
            <button type="button" className="btn btn-default" onClick={() => this.props.expandItem(this.props._id) }>
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
            <Link to={'/categories/' + c} className="label label-default" key={c}>{c}</Link>
          )}
        </div>
      </li>
    );
  }
}

export default connect(null, { expandItem, completeItem, deleteItem })(ListItem);
