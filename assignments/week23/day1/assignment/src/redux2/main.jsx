import React from "react";
import { connect } from "react-redux";

class main extends React.Component {
  state = {
    task: "",
  };
  changehandler = (e) => {
    this.setstate({
      [e.target.name]: e.target.value,
    });
  };
  addHnadler = () => {
    this.props.dispatch({
      type: "Add-item",
      payload: this.state.task,
    });
    this.setState({
      task: "",
    });
  };
  render() {
    return (
      <>
        <div>
          <input
            name="task"
            value={this.state.task}
            onChange={this.changehandler}
          />
          <button onClick={this.addHnadler}>Add to list</button>
        </div>
        <div>
          <ul>
            {this.props.todos.map((item, idx) => (
              <div>
                <li key={idx}>{this.props.todos}</li>
                <button onClick={this.deletehandler}>Delete</button>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
const mapstatetoprops = (state) => {
  console.log(state);
  return {
    todos: state,
  };
};
export default connect(mapstatetoprops)(main);
