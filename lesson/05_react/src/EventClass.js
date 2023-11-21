import { Component } from "react";

class EventClass extends Component {
  //생성자
  constructor(props) {
    super(props); //부모 클래스인 Component의 생성자 호출

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    alert("클래스형 컴포넌트");
  }

  handleClick2 = () => {
    console.log("화살표 함수", this);
    alert("클래스형 컴포넌트 2번");
  };

  handleClick3 = (message) => {
    console.log("이건 message", this);
    alert(this);
  };

  render() {
    return (
      <>
        {/* <button onClick={this.handleClick}>클릭class</button>
        <button onClick={this.handleClick2}>클릭class2번</button> */}
        <button onClick={(message) => this.handleClick3(message)}>
          show Message
        </button>
      </>
    );
  }
}

export default EventClass;
