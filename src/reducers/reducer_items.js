const INITIAL_STATE = [
  {
    id:1,
    title: "Eat more oranges",
    description: "Oranges are good for you and for this reason I should eat a ton of oranges. It also prevents scurvy.",
    expanded: false,
    done: false
  },
  {
    id:2,
    title: "Go to Angkor Wat",
    description: "Angkor Wat is possibly the coolest ancient ruin on the face of the planet. It is located in Cambodia.",
    expanded: false,
    done: false
  },
  {
    id:3,
    title: "Build a table",
    description: "This task would require going to a class and finding some way to get the tools and lumber.",
    expanded: false,
    done: false
  },
  {
    id:4,
    title: "Make Peppermint Brownies",
    description: "I have a ton of fresh peppermint and I should use it for something. Why not brownies?",
    expanded: false,
    done: false
  }
];

function item(state, action) {
  switch(action.type) {
    case 'EXPAND_ITEM':
      if (state.id != action.key) {
        return state;
      }
      console.log('made it', state.expanded);
      return {
        ...state,
        expanded: !state.expanded
      };
    default:
      return state;
  }
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'EXPAND_ITEM':
      return state.map(i => {
        return item(i, action);
      });
    default:
      return state;
  }
}
