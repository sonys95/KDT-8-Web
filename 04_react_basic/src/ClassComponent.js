import { Component } from "react"; //1번 방법
//import React from "react";  //2번 방법
import PropTypes from "prop-types";

//class형 컴포넌트
//class 컴포넌트명 extends Component{}
// class ClassComponent extends React.Component {} //2번 방법
class ClassComponent extends Component {
  //1번 방법

  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    // const name = "손영석";
    const { name } = this.props;

    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
        <h4>{name}</h4>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: "손영석",
};

ClassComponent.prototypes = {
  name: PropTypes.number,
};

export default ClassComponent;
