import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import ListItem from './list-item';

// should filter by route prop or state filter
const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

class List extends Component {
  renderList() {
    let items = _.filter(this.props.items, this.props.route ? this.props.route.filter : this.props.filter);

    return items.map((item) => {
      return (
        <ListItem {...item} key={item.id} />
      );
    });
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(List);
