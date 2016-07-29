export default function(state = { fetchError: false }, action) {
  let results;
  switch(action.type) {
    case 'FETCH_ITEM':
      results = action.payload.data;
      return {...state, fetchError: false};
    case 'FETCH_ITEM_SUCCESS':
      results = action.payload.data[0];
      return {...state, ...results};
    case 'FETCH_ITEM_FAILURE':
      var error = action.payload.data || action.payload.message;//2nd one is network or server down errors
      console.log('fetchItem failed', action.payload, action.error);
      return {...state, fetchError: true, error};
    default:
      return state;
  }
}
