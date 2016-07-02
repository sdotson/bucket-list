export function expandItem(id) {
  console.log('action triggered', id);
  return {
    type: 'EXPAND_ITEM',
    key: id
  }
}
