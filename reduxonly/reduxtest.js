const { createStore } = require("redux");

const initialState = {
  age: 19
};

function myReducer(state = initialState, action) {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += 1;
  } else if (action.type === "SUB") {
    newState.age -= 1;
  }
  return newState;
}

const store = createStore(myReducer);
store.dispatch({ type: "SUB" });

console.log(store.getState());
