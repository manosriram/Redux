export const handleChange = e => {
  return {
    type: "CHG",
    e: e
  };
};

export const handleSubmit = e => {
  return {
    type: "SUB",
    e: e
  };
};
