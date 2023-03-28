import React, { Component } from "react";

export default class ListChild extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.list}</h2>
        <p>{this.props.list2}</p>
      </div>
    );
  }
}
