import React, { Component } from 'react';
import { change } from 'redux-form';

class CheckboxGroup extends Component {
  render() {
    const { options, fieldName } = this.props;

    return (
      <div>
      {options.map((category, index) =>
         <div key={index} className="checkbox">
          <label>
          <input
            type="checkbox"
            checked={fieldName.value.indexOf(category) >= 0}
            onChange={event => {
              const index = fieldName.value.indexOf(category);

              if (index < 0) { // wasn't selected
                if (event.target.checked) { // was checked
                  fieldName.onChange(fieldName.value.concat(category));
                }
              } else {
                if (!event.target.checked) { // was unchecked
                  const copy = [...fieldName.value]; // make copy to not mutate value
                  copy.splice(index, 1); // remove item at index
                  fieldName.onChange(copy);
                }
              }
            }} />
            {category}
           </label>
         </div>
       )}
     </div>
    )
  }
}

export default CheckboxGroup;
