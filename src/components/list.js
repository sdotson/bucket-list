import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import { fetchItems, fetchItemsSuccess, fetchItemsFailure } from '../actions/items';

import ListItem from './list-item';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => {
      dispatch(fetchItems()).then((response) => {
            !response.error ? dispatch(fetchItemsSuccess(response.payload)) : dispatch(fetchItemsFailure(response.payload));
          });
    }
  }
}

class List extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  renderList() {
    let items = _.filter(this.props.items, this.props.filter);

    return items.map((item) => {
      return (
        <ListItem {...item} key={item._id} />
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

function mapStateToProps(state, props) {
  var filter = props.filter;
  return {
    items: state.items,
    filter: { ...state.visibilityFilter, ...filter }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
