import React from "react";
class Message extends React.Component {
  state = {
    bgcolor: "",
  };
  message = () => {
    return this.setState({ bgcolor: "red" });
  };
  render() {
    return (
      <div>
        <div>
          <p
            data-topic-name="discussion"
            style={{ backgroundColor: this.state.bgcolor }}
          >
            General discussion
          </p>
          <p data-topic-name="bugs">Bugs</p>
          <p data-topic-name="animals">Animals</p>
        </div>
        <button onClick={this.message}>Change para background</button>
      </div>
    );
  }
}
export default Message;
