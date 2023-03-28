import React, { Component } from "react";

export default class ListChild extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.todo}</p>
      </div>
    );
  }
}
