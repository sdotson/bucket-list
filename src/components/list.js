import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from './list-item';

class List extends Component {
  renderList() {
    let items = this.props.items.filter((item) => {
      return item.done === this.props.route.done
    });

    return items.map((item) => {
      return (
        <ListItem {...item} key={item.id} />
      );
    });
  }
  render() {
    console.log(this.props.items);
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(List);
