import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { addItem } from '../actions/index';
import CheckboxGroup from './checkbox-group';

import { createItem } from '../actions/items';

class NewItem extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createItem(props);
    this.context.router.push('/my-bucket-list');
  }

  render() {
    const { fields: { title, description, categories }, handleSubmit } = this.props;

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
            <input type="submit" className="btn btn-primary" value="Add Item" />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'ItemsNewForm',
  fields: ['title', 'description', 'categories'],
  initialValues: {
    categories: []
  }
}, null, { createItem })(NewItem);
