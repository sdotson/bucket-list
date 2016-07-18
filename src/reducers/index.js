import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ItemsReducer from './reducer_items';
import VisibilityFilterReducer from './visibilityFilter';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  user: UserReducer,
  items: ItemsReducer,
  visibilityFilter: VisibilityFilterReducer,
  form: formReducer
});

export default rootReducer;
