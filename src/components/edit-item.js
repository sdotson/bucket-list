import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { fetchItem, fetchItemSuccess, fetchItemFailure, editItem, editItemSuccess, editItemFailure } from '../actions/items';
import { browserHistory } from 'react-router';

import CheckboxGroup from './checkbox-group';

class EditItem extends Component {

  componentWillMount() {
    this.props.fetchItem(this.props.params.item_id);
  }

  onSubmit(props) {
    this.props.editItem(props);
  }

  render() {
    const { fields: { title, description, categories }, selectedItem, handleSubmit } = this.props;
    const categoriesArray = ['Travel', 'Creativity', 'Health', 'Career', 'Family', 'Adventure', 'Friendship'];

    return (
      <div>
        {selectedItem.fetchError ?
          <div className="alert alert-danger" style={{marginTop: '20px'}}>
            <strong>Error</strong> There was an error fetching this item. Are you sure the url is correct?
          </div>
        : '' }
        { selectedItem.editError ?
          <div className="alert alert-danger" style={{marginTop: '20px'}}>
            <strong>Error</strong> There was error sending this edit request to the server. Please try again later.
          </div>
        : '' }
        { selectedItem.fetchError || selectedItem.editError ?
          ''
          :
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" {...title} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea {...description} className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label>Categories</label>
              <CheckboxGroup options={categoriesArray} fieldName={categories} />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="Update Item" />
            </div>
          </form>
        }
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => {
      dispatch(fetchItem(id)).then((response) => {
        console.log('response', response);
        !response.error ? dispatch(fetchItemSuccess(response.payload)) : dispatch(fetchItemFailure(response));
      });
    },
    editItem: (props) => {
      dispatch(editItem(props)).then((response) => {
        if (!response.error) {
          dispatch(editItemSuccess(response.payload));
          browserHistory.push('/my-bucket-list');
        } else {
          dispatch(editItemFailure(response));
        }
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.selectedItem,
    selectedItem: state.selectedItem
  };
}

export default reduxForm({
    form: 'ItemsEditForm',
    fields: ['_id','title', 'description', 'categories']
  },
  mapStateToProps,
  mapDispatchToProps
)(EditItem)
