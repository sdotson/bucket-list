import {
	FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, RESET_ITEMS,
	FETCH_ITEM, FETCH_ITEM_SUCCESS,  FETCH_ITEM_FAILURE,
	CREATE_ITEM, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE,
	DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE, RESET_DELETED_ITEM
} from '../actions/items';


	const INITIAL_STATE = { itemsList: {items: [], error:null, loading: false},
							newItem:{item:null, error: null, loading: false},
							activeItem:{item:null, error:null, loading: false},
							deletedItem: {item: null, error:null, loading: false},
						};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_ITEMS:// start fetching items and set loading = true
		console.log('FETCH_ITEMS', state, action);
  	return { ...state, itemsList: {items:[], error: null, loading: true} };
  case FETCH_ITEMS_SUCCESS:// return list of items and make loading = false
    return { ...state, itemsList: {items: action.payload.data, error:null, loading: false} };
  case FETCH_ITEMS_FAILURE:// return error and make loading = false
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, itemsList: {items: [], error: error, loading: false} };
  case RESET_ITEMS:// reset itemList to initial state
    return { ...state, itemsList: {items: [], error:null, loading: false} };

  case FETCH_ITEM:
    return { ...state, activeItem:{...state.activeItem, loading: true}};
  case FETCH_ITEM_SUCCESS:
    return { ...state, activeItem: {item: action.payload.data, error:null, loading: false}};
  case FETCH_ITEM_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, activeItem: {item: null, error:error, loading:false}};

  case CREATE_ITEM:
  	return {...state, newItem: {...state.newItem, loading: true}}
  case CREATE_ITEM_SUCCESS:
  	return {...state, newItem: {item:action.payload.data, error:null, loading: false}}
  case CREATE_ITEM_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, newItem: {item:null, error:error, loading: false}}

  case DELETE_ITEM:
   	return {...state, deletedItem: {...state.deletedItem, loading: true}}
  case DELETE_ITEM_SUCCESS:
  	return {...state, deletedItem: {item:action.payload.data, error:null, loading: false}}
  case DELETE_ITEM_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, deletedItem: {item:null, error:error, loading: false}}

  }
}
