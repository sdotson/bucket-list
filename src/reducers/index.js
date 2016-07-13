import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ItemsReducer from './reducer_items';
import VisibilityFilterReducer from './visibilityFilter';

const rootReducer = combineReducers({
  items: ItemsReducer,
  visibilityFilter: VisibilityFilterReducer,
  form: formReducer
});

export default rootReducer;
