export function completeItem(id) {
  return {
    type: 'COMPLETE_ITEM',
    key: id
  };
}

export function addItem(payload) {
  return {
    type: 'ADD_ITEM',
    payload: payload
  };
}

export function deleteItem(key) {
  return {
    type: 'DELETE_ITEM',
    key
  };
}
