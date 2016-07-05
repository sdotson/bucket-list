import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { addItem } from '../actions/index';

class NewItem extends Component {
  onSubmit(props) {
    console.log(props);
  }

  render() {
    const { fields: { title, description, categories }, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title" {...title} />
          </div>
          <div className="form-group">
            <textarea {...description} className="form-control" placeholder="Put the description of the item here."></textarea>
          </div>
          <div className="form-group row">
            <div className="col-md-4">
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" {...categories} />Travel
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" {...categories} />Creativity
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" {...categories} />Health
              </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" {...categories} />Career
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" {...categories} />Family
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" {...categories} />Adventure
              </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" {...categories} />Friendship
              </label>
              </div>
            </div>
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
  fields: ['title', 'description', 'categories']
}, null, { addItem })(NewItem);
