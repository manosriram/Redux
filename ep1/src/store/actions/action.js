export const loading = () => {
  return { type: "LOAD" };
};

export const incCount = val => {
  return { type: "INC", value: val };
};

export const decCount = val => {
  return { type: "DEC", value: val };
};

export const removeLI = e => {
  return { type: "DEL", ind: e.target.value };
};

export const showLog = () => {
  return { type: "LOG" };
};
