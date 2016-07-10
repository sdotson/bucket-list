import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { addItem } from '../actions/index';
import CheckboxGroup from './checkbox-group';

class NewItem extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.addItem(props);
    this.context.router.push('/');
  }

  render() {
    const { fields: { title, description, categories }, handleSubmit } = this.props;

    const categoriesArray = ['Travel', 'Creativity', 'Health', 'Career', 'Family', 'Adventure', 'Friendship'];

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title" {...title} />
          </div>
          <div className="form-group">
            <textarea {...description} className="form-control" placeholder="Put the description of the item here."></textarea>
          </div>
          <div className="form-group">
            <CheckboxGroup options={categoriesArray} fieldName={categories} />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
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
}, null, { addItem })(NewItem);
