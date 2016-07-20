const INITIAL_STATE = {
  completed: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action) {
    case 'SHOW_ALL_COMPLETED':
      return state;
    case 'SHOW_ALL_UNCOMPLETED':
      return state;
    case 'SHOW_CATEGORY':
      return state;
    case 'SHOW_CUSTOM':
      return state;
    default:
      return state;
  }
}
