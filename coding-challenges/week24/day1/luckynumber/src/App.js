// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Redirect } from "react-router-dom";
class App extends React.Component {
  initialstate = {
    inputvalue: "",
    ans: "",
    chances: 0,
    res: "",
  };
  state = {
    ...this.initialstate,
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submithandler = (e) => {
    e.preventDefault();
    const random = parseInt(Math.random() * 21);

    // console.log(this.state.inputvalue);
    if (parseInt(this.state.inputvalue) > 20) {
      this.setState({
        ans: "Number Greater than 20 not accepted",
        inputvalue: "",
      });
    } else if (this.state.chances > 3) {
      this.setState({
        inputvalue: "",
        ans: "",
        chances: 0,
        res: "Ur given chances are completed",
      });
      if (parseInt(random) === parseInt(this.state.inputvalue)) {
        this.setState({
          ans: "But numbers matched",
        });
      }
    } else if (!this.state.inputvalue) {
      this.setState({
        ans: "Empty field is not accepted",
      });
    } else if (parseInt(random) === parseInt(this.state.inputvalue)) {
      this.setState({
        ans: "Number match",
        inputvalue: "",
        res: "",
        chances: [this.state.chances + 1],
      });
    } else {
      this.setState({
        ans: "Number not match",
        inputvalue: "",
        chances: [this.state.chances + 1],
        res: "",
      });
    }

    // console.log("random", random"number", this.state.inputvalue);
  };

  render() {
    return (
      <form className="App" onSubmit={this.submithandler}>
        <h1>Lucky Game</h1>
        <br />
        <label>
          <b>
            <i>{this.state.res}</i>
          </b>
        </label>
        <br />
        <label>Enter a number from 1 to 20</label> <br />
        <input
          name="inputvalue"
          type="number"
          value={this.state.inputvalue}
          onChange={this.changeHandler}
        />
        <h1>{this.state.ans}</h1>
      </form>
    );
  }
}

export default App;
