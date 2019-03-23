var initialState = {
  name: "",
  age: null,
  location: "",
  state: "",
  country: "",
  email: "",
  password: "",
  payload: {},
  newState: {}
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "CHG") {
    let e = action.e;
    return {
      ...state,
      [e.target.name]: e.target.value
    };
  } else if (action.type === "SUB") {
    let e = action.e;
    e.preventDefault();
    return {
      ...state,
      payload: action.payload
    };
  } else if (action.type === "CHNGSTATE") {
    return {
      ...state,
      newState: action.prop
    };
  }
  return newState;
};

export default reducer;
