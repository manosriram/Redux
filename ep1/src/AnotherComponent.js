import React from "react";

class AnotherComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>History Length = {this.props.props.history.length}</h1>
      </div>
    );
  }
}

export default AnotherComponent;
