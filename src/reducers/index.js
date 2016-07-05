import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ItemsReducer from './reducer_items';

const rootReducer = combineReducers({
  items: ItemsReducer,
  form: formReducer
});

export default rootReducer;
