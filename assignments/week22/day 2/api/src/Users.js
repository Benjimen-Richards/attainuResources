import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Data extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ data: res.data }));
  }
  submithandler = (props) => {
    console.log(props);
  };
  redirect = (id) => {
    this.props.history.push("/users/" + id);
    console.log(this.props);
  };
  render() {
    const Users = this.state.data;
    return (
      <div>
        <button onClick={() => this.submithandler(Users)}>submit</button>
        <ul>
          {Users.map((user) => {
            return (
              <li key={user.id} onClick={() => this.redirect(user.id)}>
                {user.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Data;
