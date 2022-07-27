import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  //should be synchronous
  //should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  } else if (action.type === "ADD_TEN") {
    return { counter: state.counter + action.payload };
  }

  return state;
};

const store = createStore(reducer);

export default store;
