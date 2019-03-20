import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
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
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incCount: () => dispatch({ type: "INC", value: 1 }),
    decCount: () => dispatch({ type: "DEC", value: 1 }),
    removeLI: e => {
      dispatch({ type: "DEL", ind: e.target.value });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
