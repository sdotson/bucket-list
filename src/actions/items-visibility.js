export function showCompletedItems() {
  return {
    type: 'SHOW_ALL_COMPLETED'
  };
}

export function showUncompletedItems() {
  return {
    type: 'SHOW_ALL_UNCOMPLETED'
  };
}

export function showCategory(payload) {
  return {
    type: 'SHOW_CATEGORY',
    payload
  };
}

export function showCategory(payload) {
  return {
    type: 'SHOW_CUSTOM',
    payload
  };
}
