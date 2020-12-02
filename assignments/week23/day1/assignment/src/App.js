import "./App.css";
import React from "react";
import { connect } from "react-redux";
class App extends React.Component {
  state = {
    task: " ",
    error: "",
    visibility: "hidden",
    editvisibility: "visible",
    value2: "",
  };
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addtodo = () => {
    if (!this.state.task) {
      this.setState({ error: "enter task" });
    } else if (this.props.todos.includes(this.state.task)) {
      this.setState({ error: "enter new task" });
    } else {
      this.props.dispatch({
        type: "Add_task",
        payload: this.state.task,
      });
      this.setState({
        task: "",
      });
    }
  };
  delete = (todo) => {
    this.props.dispatch({
      type: "Remove",
      payload: todo,
    });
  };
  edit = (e) => {
    this.setState({
      visibility: "visible",
      editvisibility: "hidden",
    });
  };
  update = (id) => {
    this.setState({ visibility: "hidden" });
    console.log(this.state.value2, id);
    this.props.todos[id] = this.state.value2;
  };
  render() {
    return (
      <form
        className="App"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            name="task"
            value={this.state.task}
            onChange={this.changehandler}
          />
          <button onClick={this.addtodo}>Add List</button>
          <br />
          <span>{this.state.error}</span>
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {this.props.todos.map((todo, idx) => (
              <>
                <li key={idx}>{todo}</li>
                <input
                  name="value2"
                  style={{ visibility: this.state.visibility }}
                  value={this.state.name}
                  id={idx}
                  onChange={this.changehandler}
                />

                <button
                  onClick={() => this.update(idx)}
                  style={{ visibility: this.state.visibility }}
                >
                  update
                </button>

                <button onClick={() => this.edit(idx)}>edit</button>
                <button onClick={() => this.delete(todo)}>delete</button>
              </>
            ))}
          </ul>
        </div>
      </form>
    );
  }
}
const mapstatetoprops = (state) => {
  return {
    todos: state,
  };
};
export default connect(mapstatetoprops)(App);
