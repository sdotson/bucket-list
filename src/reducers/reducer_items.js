import _ from 'lodash';

import { FETCH_ITEMS } from '../actions/items';

function item(state, action) {
  switch(action.type) {
    case 'EXPAND_ITEM':
      if (state.id != action.key) {
        return state;
      }
      return {
        ...state,
        expanded: !state.expanded
      };
    case 'COMPLETE_ITEM':
      if (state.id != action.key) {
        return state;
      }
      return {
        ...state,
        done: !state.done
      };
    default:
      return state;
  }
}

export default function(state = [], action) {
  switch(action.type) {
    case 'FETCH_ITEMS':
      console.log('FETCH_ITEMS', action.payload.data);
      return action.payload.data;
    case 'EXPAND_ITEM':
      return state.map(i => {
        return item(i, action);
      });
    case 'COMPLETE_ITEM':
      return state.map(i => {
        return item(i, action);
      });
    case 'ADD_ITEM':
      let newItem = {
        ...action.payload,
        done: false,
        expanded: false,
        added: new Date()
      };
      return [...state, newItem];
    case 'DELETE_ITEM':
      console.log(item.id, action.key);
      return state.filter(item => item.id !== action.key);
    default:
      return state;
  }
}
