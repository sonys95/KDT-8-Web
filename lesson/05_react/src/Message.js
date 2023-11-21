import { Component } from "react";

class Message extends Component {
  showMessage = () => {
    alert(this.props.message);
  };
  render() {
    return (
      <>
        <button onClick={this.showMessage}>show message</button>
      </>
    );
  }
}

export default Message;
