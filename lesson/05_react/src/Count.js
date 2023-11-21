import { Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      color: "검정색글씨",
      black: "black",
      red: "red",
      blue: "blue",
      comment: "",
      hi: "안녕하세요",
      comment1: "사라질게",
    };

    //바인딩
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({ number: this.state.number + 1 });
  }
  //   handleDecrement() {
  //     this.setState({ number: this.state.number - 1 });
  // }
  handleDecrement = () => {
    this.setState({ number: this.state.number - 1 });
  };
  changeRed = () => {
    this.setState({ black: this.state.red });
  };
  changeBlue = () => {
    this.setState({ black: this.state.blue });
  };
  changeComment = () => {
    this.setState({ comment: this.state.comment1 });
    this.setState({ hi: this.state.comment });
  };

  render() {
    return (
      <div>
        <h1 className={this.state.black}>{this.state.comment}</h1>
        {/* <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>다운</button> */}
        {/* <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button> */}
        <button onClick={this.changeComment}>사라져라</button>
        <h1 className={this.state.black}>{this.state.hi}</h1>
      </div>
    );
  }
}

export default Counter;
