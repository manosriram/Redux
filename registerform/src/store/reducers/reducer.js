var initialState = {
  name: "",
  age: null,
  location: "",
  state: "",
  country: "",
  email: "",
  password: "",
  payload: {}
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
    const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const res2 = await res1.json();
    return {
      ...state,
      payload: {
        title: res2.title
      }
    };
  }
  return newState;
};

export default reducer;
