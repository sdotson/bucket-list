export default function(state = { fetchError: false, editError: false }, action) {
  let results;
  switch(action.type) {
    case 'FETCH_ITEM':
      return {...state, fetchError: false};
    case 'FETCH_ITEM_SUCCESS':
      return {...state, ...action.payload.data[0]};
    case 'FETCH_ITEM_FAILURE':
      var error = action.payload.data || action.payload.message;//2nd one is network or server down errors
      return {...state, fetchError: true, error};

    case 'EDIT_ITEM':
      results = action.payload.data;
      return {...state, editError: false};
    case 'EDIT_ITEM_SUCCESS':
      results = action.payload.data[0];
      return {...state, ...results};
    case 'EDIT_ITEM_FAILURE':
      var error = action.payload.data || action.payload.message;//2nd one is network or server down errors
      return {...state, editError: true, error};
    default:
      return state;
  }
}
