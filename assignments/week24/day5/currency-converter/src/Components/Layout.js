import React from "react";
import "./Layout.css";
const url = "https://api.exchangeratesapi.io/latest?base=USD";
class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      firstinputvalue: null,
      firstoptionvalue: "",
      result: "",
      secondoptionvalue: "",
      error: "",
    };
  }
  changehandler = (e) => {
    const value = e.target.value;
    this.setState({
      firstinputvalue: value,
    });
  };
  optionHandler = (data) => {
    if (data) {
      return Object.entries(data.rates).map((user) => (
        <option value={user[1]}>{user[0]}</option>
      ));
    }
  };
  secondOptionvalue = (data) => {
    if (data) {
      return Object.entries(data.rates).map((user) => (
        <option value={user[1]}>{user[0]}</option>
      ));
    }
  };

  selectHandler = (e) => {
    const value = e.target.value;
    this.setState({ firstoptionvalue: value });
  };
  secondSelecthandler = (e) => {
    const value = e.target.value;
    this.setState({
      secondoptionvalue: value,
    });
  };

  resulthandler = () => {
    if (!this.state.firstinputvalue) {
      this.setState({ error: "error" });
    } else {
      const oldCurrency =
        this.state.firstinputvalue * this.state.firstoptionvalue;
      const newcurrency = this.state.secondoptionvalue;
      const res = oldCurrency / newcurrency;
      this.setState({
        result: res,
        error: "",
      });
    }
  };

  render() {
    return (
      <div className="Mainbox">
        <div className="subbox">
          <h1>Currency converter</h1>
          <input onChange={this.changehandler} />
          <br />
          <span>{this.state.error}</span>
          <br />
          <select onChange={this.selectHandler}>
            <option>===Select Country===</option>
            {this.optionHandler(this.state.data)}
          </select>
          <br />
          <label style={{ display: "flex", justifyContent: "center" }}>
            Selected country Currency value:{this.state.firstoptionvalue}
          </label>
          <br />
        </div>
        <div>
          <select onChange={this.secondSelecthandler}>
            <option>===Select Country===</option>
            {this.secondOptionvalue(this.state.data)}
          </select>{" "}
          <br />
          <label>
            Selected country Currency value:{this.state.secondoptionvalue}
          </label>{" "}
          <br />
        </div>
        <button onClick={this.resulthandler}>Calculate</button>
        <br />
        <input value={this.state.result} disabled />
      </div>
    );
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
}
export default Layout;
