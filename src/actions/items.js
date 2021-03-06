import axios from 'axios';

//Item list
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const RESET_ITEMS = 'RESET_ITEMS';

//Create new item
export const CREATE_ITEM = 'CREATE_ITEM';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';
export const RESET_NEW_ITEM = 'RESET_NEW_ITEM';

//Fetch item
export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';
export const RESET_ACTIVE_ITEM = 'RESET_ACTIVE_ITEM';

// Edit item
export const EDIT_ITEM = 'EDIT_ITEM';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

export const COMPLETE_ITEM = 'COMPLETE_ITEM';

export const EXPAND_ITEM = 'EXPAND_ITEM';

export const ITEMS_API_FAILURE = 'ITEMS_API_FAILURE';

//Delete item
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';
export const RESET_DELETED_ITEM = 'RESET_DELETED_ITEM';

const ROOT_URL = 'http://192.241.148.238:3000/api';

export function fetchItems() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/items`,
    headers: {'Authorization': sessionStorage.getItem('jwtToken')}
  });

  return {
    type: FETCH_ITEMS,
    payload: request
  };
}

export function itemsApiFailure(error) {
  return {
    type: ITEMS_API_FAILURE,
    payload: error
  };
}

export function fetchItemsSuccess(items) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items
  };
}

export function fetchItemsFailure(error) {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error
  };
}

export function createItem(props) {
  //const request = axios.item(`${ROOT_URL}/items`, props);
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/items`,
    headers: {'Authorization': sessionStorage.getItem('jwtToken')}
  });

  return {
    type: CREATE_ITEM,
    payload: request
  };
}

export function createItemSuccess(newItem) {
  return {
    type: CREATE_ITEM_SUCCESS,
    payload: newItem
  };
}

export function createItemFailure(error) {
  return {
    type: CREATE_ITEM_FAILURE,
    payload: error
  };
}

export function fetchItem(id) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/items/${id}`,
    headers: {'Authorization': sessionStorage.getItem('jwtToken')}
  });

  return {
    type: FETCH_ITEM,
    payload: request
  };
}

export function fetchItemSuccess(activeItem) {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: activeItem
  };
}

export function fetchItemFailure(error) {
  return {
    type: FETCH_ITEM_FAILURE,
    payload: error
  };
}

export function editItem(props) {
  //const request = axios.item(`${ROOT_URL}/items`, props);
  const request = axios({
    method: 'put',
    data: props,
    url: `${ROOT_URL}/items/${props._id}`,
    headers: {'Authorization': sessionStorage.getItem('jwtToken')}
  });

  return {
    type: EDIT_ITEM,
    payload: request
  };
}

export function editItemSuccess(activeItem) {
  return {
    type: EDIT_ITEM_SUCCESS,
    payload: activeItem
  };
}

export function editItemFailure(error) {
  return {
    type: EDIT_ITEM_FAILURE,
    payload: error
  };
}

export function completeItem(props) {
  const request = axios({
    method: 'put',
    data: { _id: props._id ,completed: !props.completed },
    url: `${ROOT_URL}/items/${props._id}`,
    headers: {'Authorization': sessionStorage.getItem('jwtToken')}
  });

  return {
    type: COMPLETE_ITEM,
    payload: request
  };
}

export function deleteItem(id) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/items/${id}`,
    headers: {'Authorization': sessionStorage.getItem('jwtToken')}
  });
  return {
    type: DELETE_ITEM,
    payload: request
  };
}

export function deleteItemSuccess(deletedItem) {
  return {
    type: DELETE_ITEM_SUCCESS,
    payload: deletedItem
  };
}

export function deleteItemFailure(response) {
  return {
    type: DELETE_ITEM_FAILURE,
    payload: response
  };
}

export function expandItem(id) {
  return {
    type: EXPAND_ITEM,
    key: id
  };
}
