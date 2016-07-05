export function expandItem(id) {
  console.log('action triggered', id);
  return {
    type: 'EXPAND_ITEM',
    key: id
  };
}

export function completeItem(id) {
  console.log('action triggered', id);
  return {
    type: 'COMPLETE_ITEM',
    key: id
  };
}

export function addItem(payload) {
  console.log(payload);
  return {
    type: 'ADD_ITEM',
    payload: payload
  };
}
