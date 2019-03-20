import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Stream } from "stream";

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  () => rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default Store;
