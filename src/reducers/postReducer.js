import { FETCH_POSTS } from "../actions/types";

const initalState = {
  items: [],
  item: {}
};

export default (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
