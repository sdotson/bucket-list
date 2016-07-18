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

//Validate item fields like Title, Categries on the server
export const VALIDATE_ITEM_FIELDS = 'VALIDATE_ITEM_FIELDS';
export const VALIDATE_ITEM_FIELDS_SUCCESS = 'VALIDATE_ITEM_FIELDS_SUCCESS';
export const VALIDATE_ITEM_FIELDS_FAILURE = 'VALIDATE_ITEM_FIELDS_FAILURE';
export const RESET_ITEM_FIELDS = 'RESET_ITEM_FIELDS';

//Fetch item
export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';
export const RESET_ACTIVE_ITEM = 'RESET_ACTIVE_ITEM';

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

export function validateItemFields(props) {
  //note: we cant have /items/validateFields because it'll match /items/:id path!
  const request = axios.item(`${ROOT_URL}/items/validate/fields`, props);

  return {
    type: VALIDATE_ITEM_FIELDS,
    payload: request
  };
}

export function validateItemFieldsSuccess() {
  return {
    type: VALIDATE_ITEM_FIELDS_SUCCESS
  };
}

export function validateItemFieldsFailure(error) {
  return {
    type: VALIDATE_ITEM_FIELDS_FAILURE,
    payload: error
  };
}

export function resetItemFields() {
  return {
    type: RESET_ITEM_FIELDS
  }
};


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

export function resetNewItem() {
  return {
    type: RESET_NEW_ITEM
  }
};

export function resetDeletedItem() {
  return {
    type: RESET_DELETED_ITEM
  }
};

export function fetchItem(id) {
  const request = axios.get(`${ROOT_URL}/items/${id}`);

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

export function resetActiveItem() {
  return {
    type: RESET_ACTIVE_ITEM
  }
};

export function deleteItem(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/items/${id}`,
   headers: {'Authorization': `Bearer ${tokenFromStorage}`}
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
