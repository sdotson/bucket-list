const INITIAL_STATE = {
  completed: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action) {
    case 'SHOW_ALL_COMPLETED':
      return { completed: true };
    case 'SHOW_ALL_UNCOMPLETED':
      return { completed: false };
    case 'SHOW_CATEGORY':
      return state;
    case 'SHOW_CUSTOM':
      return state;
    case 'RESET_FILTER':
      return {};
    default:
      return state;
  }
}
