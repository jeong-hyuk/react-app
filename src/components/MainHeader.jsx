import React from 'react';
import { Component } from 'react';

class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }
  render() {
    return <h1>Hello, {this.cas ? '캬하' : '노맛'}</h1>;
  }
}
export default MainHeader;
// function MainHeader() {
//   const pororo = "뽀로로";
//   const friend = "친구들";
//   const arr = [1, 2, 3, 4, 5];
//   const cas = true;

//   return <h1> Hello, {cas ? "캬하" : "노맛"} Component world!</h1>;
// }
// export default MainHeader;
