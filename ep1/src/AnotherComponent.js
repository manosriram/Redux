import React from "react";
import * as actionCreator from "./store/actions/action";
import { connect } from "react-redux";

class AnotherComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>History Length = {this.props.props.history.length}</h1>
        <button onClick={this.props.showLog}>Click</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showLog: () => dispatch(actionCreator.showLog())
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AnotherComponent);
