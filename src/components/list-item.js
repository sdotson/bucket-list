import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { deleteItem, editItem, completeItem, expandItem } from '../actions/items';

import moment from 'moment';

class ListItem extends Component {

  determineItemClass() {
    return this.props.expanded ? 'list-item clearfix active' : 'list-item clearfix';
  }

  determineButtonClass() {
    return this.props.expanded ? 'actionbar-icon glyphicon glyphicon-chevron-up' : 'actionbar-icon glyphicon glyphicon-chevron-down';
  }

  render() {
    return (
      <div className={this.determineItemClass()} key={this.props.key}>
        <div className="clearfix">
          <h4 className="pull-left">{this.props.title}</h4>
          <div className="pull-right actionbar">
            <span className="actionbar-icon glyphicon glyphicon-remove" onClick={() => this.props.deleteItem(this.props._id)}></span>
            <span className="actionbar-icon glyphicon glyphicon-ok" onClick={() => this.props.completeItem(this.props)}></span>
            <Link to={"/items/" + this.props._id + "/edit"} className="actionbar-icon glyphicon glyphicon-pencil"></Link>
            <span className={this.determineButtonClass()} onClick={() => this.props.expandItem(this.props._id) }></span>
          </div>
        </div>
        <div className="details">
          <div>
            <p>
            {this.props.description}
            </p>
            <p className="small-text">
            Added {moment(this.props.added).format('dddd, MMMM Do, YYYY')}.
            </p>
          </div>
          {this.props.categories.map((c) =>
            <Link to={'categories/' + c} className="label label-default" key={c}>{c}</Link>
          )}
        </div>
      </div>
    );
  }
}

export default connect(null, { expandItem, completeItem, deleteItem })(ListItem);
