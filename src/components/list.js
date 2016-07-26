import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import { fetchItems, fetchItemsSuccess, itemsApiFailure } from '../actions/items';

import ListItem from './list-item';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => {
      dispatch(fetchItems()).then((response) => {
            !response.error ? dispatch(fetchItemsSuccess(response.payload)) : dispatch(itemsApiFailure(response.error));
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
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
        {
          this.props.error ?
            <div className="alert alert-danger" style={{marginTop: '20px'}}>
              <strong>Error</strong> There was an error retrieving your items. Please try again later.
            </div>
          :
          ''
        }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const filter = props.filter;

  return {
    items: state.items.list,
    error: state.items.error,
    filter: { ...state.visibilityFilter, ...filter }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
