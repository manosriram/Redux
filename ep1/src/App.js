import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import AnotherComponent from "./AnotherComponent";
import * as actionCreator from "./store/actions/action";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnotherComponent props={this.props} />
        <h2>Count : {this.props.count}</h2>
        <button onClick={this.props.incCount}>INC</button>
        &nbsp;
        <button onClick={this.props.decCount}>DEC</button>
        <br />
        <br />
        <div>History</div>
        <div>
          <ul>
            {this.props.history.map((el, ind) => {
              return (
                <li key={ind} value={ind} onClick={this.props.removeLI}>
                  {el.count}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    history: state.history,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incCount: () => dispatch(actionCreator.incCount(1)),
    decCount: () => dispatch(actionCreator.decCount(1)),
    removeLI: e => dispatch(actionCreator.removeLI(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
