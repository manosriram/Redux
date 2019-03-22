import React, { Component } from "react";
import "./App.css";
import * as actionCreator from "./store/actions/action";
import { connect } from "react-redux";

class App extends Component {
  showState = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div className="App">
        <form
          onChange={this.props.handleChange}
          onSubmit={this.props.handleSubmit}
        >
          <input
            type="text"
            placeholder="Name."
            name="name"
            value={this.props.name}
          />
          <br />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={this.props.email}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.props.password}
          />
          <br />
          <input
            type="text"
            placeholder="Location."
            name="location"
            value={this.props.location}
          />
          <br />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={this.props.country}
          />
          <br />
          <input
            type="number"
            placeholder="Age"
            value={this.props.age}
            name="age"
          />
          <br />
          <input
            type="text"
            placeholder="State"
            value={this.props.state}
            name="state"
          />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <br />
        <button onClick={this.showState}>Show State</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    location: state.location,
    state: state.state,
    country: state.country,
    email: state.email,
    password: state.password,
    payload: state.payload
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(actionCreator.handleChange(e)),
    handleSubmit: e => {
      e.preventDefault();
      dispatch(actionCreator.handleSubmit(e));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
