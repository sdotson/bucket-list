import React, { Component, PropTypes } from 'react';
import { change } from 'redux-form';

class CheckboxGroup extends Component {

  render() {
    const { options } = this.props;
    function addField(field) {
      if (options.value.indexOf(field) === -1) {
        options.value.push(field);
      }
    }

    function removeField(field) {
      if (options.value.indexOf(field) != -1) {
        options.value.splice(options.value.indexOf(field), 1);
      }
    }
    return (
      <div>
        {options.map((category, index) =>
           <div key={index} className="checkbox">
              <label>
                <input
                      type="checkbox"
                      value={category}
                      onChange={e => e.target.checked ? addField(e.target.value) : removeField(options.value.indexOf(e.target.value))}
                 /> {category}
               </label>
           </div>
        )}
      </div>
    )
  }
}

export default CheckboxGroup;
