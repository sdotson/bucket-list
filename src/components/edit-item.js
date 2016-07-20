import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { fetchItem, fetchItemSuccess, fetchItemFailure, editItem } from '../actions/items';

import CheckboxGroup from './checkbox-group';

class EditItem extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchItem(this.props.params.item_id);
  }

  onSubmit(props) {
    this.props.editItem(props);
    this.context.router.push('/');
  }

  render() {
    const { fields: { title, description, categories }, selectedItem, handleSubmit } = this.props;
    const categoriesArray = ['Travel', 'Creativity', 'Health', 'Career', 'Family', 'Adventure', 'Friendship'];

    return (
      <div>
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
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => {
      dispatch(fetchItem(id)).then((response) => {
        console.log('response', response);
        !response.error ? dispatch(fetchItemSuccess(response.payload)) : dispatch(fetchItemFailure(response.payload));
      });
    },
    editItem: (props) => {
      console.log('wheee', props);
      dispatch(editItem(props)).then((response) => {
        console.log('response', response);
        // !response.error ? dispatch(fetchItemSuccess(response.payload)) : dispatch(fetchItemFailure(response.payload));
      });
    }
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    initialValues: state.selectedItem
  };
}

export default reduxForm({
  form: 'ItemsEditForm',
  fields: ['_id','title', 'description', 'categories']
},
mapStateToProps,
mapDispatchToProps     // mapDispatchToProps (will bind action creator to dispatch)
)(EditItem)
