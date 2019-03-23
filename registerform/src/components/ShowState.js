import React from "react";
import * as actionCreator from "../store/actions/action";
import { connect } from "react-redux";

class ShowState extends React.Component {
  componentDidMount() {
    this.props.changeState(this.props.props);
  }

  showState2 = () => {
    console.log(this.props.newState);
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <input type="text" name="newState" placeholder="New State" />
        <br />
        <h1>SS.JS</h1>
        <button onClick={this.showState2}>Click</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newState: state.newState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeState: prop => dispatch(actionCreator.changeState(prop))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowState);
