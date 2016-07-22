import _ from 'lodash';

import {
	FETCH_ITEMS, EXPAND_ITEM, COMPLETE_ITEM, EDIT_ITEM,
	DELETE_ITEM, CREATE_ITEM, ITEMS_API_FAILURE
} from '../actions/items';

function item(state, action) {
  switch(action.type) {
    case EXPAND_ITEM:
      if (state._id != action.key) {
        return state;
      }
      return {
        ...state,
        expanded: !state.expanded
      };
    case COMPLETE_ITEM:
      if (state._id != action.payload.data._id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    case EDIT_ITEM:
      if (state._id != action.payload.data._id) {
        return state;
      }
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state;
  }
}

export default function(state = { list: [], error: false }, action) {
  switch(action.type) {
		case ITEMS_API_FAILURE:
			return {...state, error: action.payload};
    case FETCH_ITEMS:
      return { ...state, list: action.payload.data };
    case EXPAND_ITEM:
			return {...state, list: state.list.map(i => {
				return item(i, action);
			})};
    case COMPLETE_ITEM:
			return {...state, list: state.list.map(i => {
				return item(i, action);
			})};
    case CREATE_ITEM:
      let newItem = action.payload.data.item;
      return {...state, list: [...state.list, newItem]};
    case EDIT_ITEM:
      return {...state, list: state.list.map(i => {
        return item(i, action);
      })};
    case DELETE_ITEM:
      return {...state, list: state.list.filter(item => item._id !== action.payload.data.item._id)};
    default:
      return state;
  }
}
