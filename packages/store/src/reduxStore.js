import { createStore } from "redux";

function product(
  state = {
    items: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

const reduxStore = createStore(product);

export default reduxStore;
