import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { editItem } from '../actions/index';
import { fetchItem, fetchItemSuccess, fetchItemFailure } from '../actions/items';

import CheckboxGroup from './checkbox-group';

class EditItem extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log('props',this.props.params.item_id);
    this.props.fetchItem(this.props.params.item_id);
  }

  onSubmit(props) {
    this.props.editItem(props);
    this.context.router.push('/');
  }

  render() {
    const { fields: { title, description, categories }, selectedItem, handleSubmit } = this.props;
    console.log(selectedItem);
    const categoriesArray = ['Travel', 'Creativity', 'Health', 'Career', 'Family', 'Adventure', 'Friendship'];

    return (
      <div>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} value={selectedItem.title} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea {...description} className="form-control" value={selectedItem.description}></textarea>
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
    }
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    selectedItem: state.selectedItem
  };
}

export default reduxForm({
  form: 'ItemsEditForm',
  fields: ['title', 'description', 'categories']
}, mapStateToProps, mapDispatchToProps)(EditItem);
