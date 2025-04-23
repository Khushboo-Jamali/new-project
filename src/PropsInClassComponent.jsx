import React, { Component } from "react";

class PropsInClassComponent extends Component {
  render() {
    return (
      <>
        <div style={{ background: "gray" }}>
          <h4>Hello {this.props.name} </h4>
          <h4>Email {this.props.email} </h4>
        </div>
      </>
    );
  }
}

export default PropsInClassComponent;
