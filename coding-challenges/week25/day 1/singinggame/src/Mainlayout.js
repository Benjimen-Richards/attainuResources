import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.data,
      text: "",
      energy: 10,
    };
  }
  singhandler = () => {
    if (this.state.energy > 2) {
      this.setState({
        text: `${this.state.list} is  singing`,
        energy: this.state.energy - 1,
      });
    } else {
      this.setState({ text: "Low Energy!Cannot sing" });
    }
  };

  walkhandler = () => {
    if (this.state.energy > 2) {
      this.setState({
        text: `${this.state.list} is walking`,
        energy: this.state.energy - 2,
      });
    } else {
      this.setState({
        text: "Low Energy!Cannot walk",
        energy: this.state.energy - 1,
      });
    }
  };
  render() {
    console.log(this.state.energy);
    return (
      <div>
        <div>
          <h1>{this.state.list}</h1>
          <button onClick={this.singhandler}>Want me to sing</button>
          <button onClick={this.walkhandler}>Want me to walk</button>
          <h2>
            <i>{this.state.text}</i>
          </h2>
        </div>
      </div>
    );
  }
}
export default Main;
