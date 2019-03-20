const initialState = {
  count: 0,
  history: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "INC") {
    return {
      ...state,
      count: state.count + action.value,
      history: state.history.concat({ count: state.count + action.value })
    };
  } else if (action.type === "DEC") {
    return {
      ...state,
      count: state.count - action.value,
      history: state.history.concat({ count: state.count - action.value })
    };
  } else if (action.type === "DEL") {
    state.history.splice(action.ind, 1);
    return {
      ...state,
      history: state.history.filter(el => el.value !== action.ind)
    };
  } else if (action.type === "LOAD") {
    newState.loading = true;
  } else if (action.type === "LOG") {
    console.log("Action Received.");
  }
  return newState;
};

export default reducer;
