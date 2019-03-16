import { Provider } from "react-redux";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import React, { Component } from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
