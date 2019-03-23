export const handleChange = e => {
  return {
    type: "CHG",
    e: e
  };
};

export const handleSubmit = e => {
  e.persist();
  return async dispatch => {
    try {
      const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
      const res2 = await res1.json();
      dispatch({
        type: "SUB",
        e: e,
        payload: res2
      });
    } catch (er) {
      console.log(er);
    }
  };
};

export const changeState = prop => {
  return {
    type: "CHNGSTATE",
    prop: prop
  };
};
