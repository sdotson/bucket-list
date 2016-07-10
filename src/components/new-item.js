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
    console.log(props);
    this.props.addItem(props);
    this.context.router.push('/');
  }

  render() {
    const { fields: { title, description, categories }, handleSubmit } = this.props;

    const categoriesArray = ['Travel', 'Creativity', 'Health', 'Career', 'Family', 'Adventure', 'Friendship'];

    let theseCategories = (function() {
      function addField(field) {
          categories.value.push(field);
      }

      function removeField(field) {
          categories.value.splice(categories.value.indexOf(field), 1);
      }

      return {
        addField: addField,
        removeField: removeField
      };
    })();

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
            {categoriesArray.map((category, index) =>
               <div key={index} className="checkbox">
                  <label>
                    <input
                          type="checkbox"
                          value={category}
                          onChange={e => e.target.checked ? theseCategories.addField(e.target.value) : theseCategories.removeField(categories.value.indexOf(e.target.value))}
                     /> {category}
                   </label>
               </div>
            )}
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
