export default function(state = {}, action) {
  switch(action.type) {
    case 'FETCH_ITEM':
      console.log('FETCH_ITEM', action.payload);
      return action.payload.data[0] || state;
    case 'FETCH_ITEM_SUCCESS':
      return action.payload.data[0];
    case 'FETCH_ITEM_FAILURE':
      var error = action.payload.data[0] || action.payload.message;//2nd one is network or server down errors
      return error;
    default:
      return state;
  }
}
