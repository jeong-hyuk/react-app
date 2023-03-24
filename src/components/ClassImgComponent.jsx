import React, { Component } from "react";
import img from "../jeju.jpg";

class ClassImgComponent extends Component {
  render() {
    return <img src={img} alt="강아지" height={200} width={200} />;
  }
}
export default ClassImgComponent;
