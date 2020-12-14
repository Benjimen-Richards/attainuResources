import React from "react";
import Main from "./Mainlayout";

class Singing extends React.Component {
  state = {
    name: "",
    list: [],
    start: "",
    buttontext: "start",
    energy: 10,
  };
  Changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  buttonhandler = () => {
    const listele = [...this.state.list, this.state.name];
    this.setState({ list: listele, name: "" });
    console.log(this.state.list);
  };
  starthandler = () => {
    this.setState({ start: "true", buttontext: "Begin" });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.Changehandler}
          name="name"
          value={this.state.name}
          placeholder="Enter user names"
        />
        {!this.state.start && (
          <button onClick={this.buttonhandler}>Add Users</button>
        )}
        <h3>Users list</h3>
        {this.state.list &&
          this.state.list.map((user) => (
            <h4>
              <b>
                <li>{user}</li>
              </b>
            </h4>
          ))}

        <button onClick={this.starthandler}>{this.state.buttontext}</button>
        {this.state.start &&
          this.state.list.map((item) => <Main data={item} />)}
      </div>
    );
  }
}
export default Singing;
