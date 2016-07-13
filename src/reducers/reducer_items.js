import _ from 'lodash';

const INITIAL_STATE = [
  {
    id:1,
    title: "Eat more oranges",
    description: "Oranges are good for you and for this reason I should eat a ton of oranges. It also prevents scurvy.",
    expanded: false,
    categories: ['Adventure','Travel'],
    done: false
  },
  {
    id:2,
    title: "Go to Angkor Wat",
    description: "Angkor Wat is possibly the coolest ancient ruin on the face of the planet. It is located in Cambodia.",
    expanded: false,
    categories: ['Adventure','Travel'],
    done: false
  },
  {
    id:3,
    title: "Build a table",
    description: "This task would require going to a class and finding some way to get the tools and lumber.",
    expanded: false,
    categories: ['Adventure','Travel'],
    done: false
  },
  {
    id:4,
    title: "Make Peppermint Brownies",
    description: "I have a ton of fresh peppermint and I should use it for something. Why not brownies?",
    expanded: false,
    categories: ['Adventure','Travel'],
    done: true
  }
];

function item(state, action) {
  switch(action.type) {
    case 'EXPAND_ITEM':
      if (state.id != action.key) {
        return state;
      }
      return {
        ...state,
        expanded: !state.expanded
      };
    case 'COMPLETE_ITEM':
      if (state.id != action.key) {
        return state;
      }
      return {
        ...state,
        done: !state.done
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
    case 'COMPLETE_ITEM':
      return state.map(i => {
        return item(i, action);
      });
    case 'ADD_ITEM':
      let newItem = {
        ...action.payload,
        done: false,
        expanded: false,
        added: new Date()
      };
      return [...state, newItem];
    case 'DELETE_ITEM':
      console.log(item.id, action.key);
      return state.filter(item => item.id !== action.key);
    default:
      return state;
  }
}
