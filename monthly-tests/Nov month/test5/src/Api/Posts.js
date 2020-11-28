import React from "react";
import { Link } from "react-router-dom";
class Post extends React.Component {
  state = { data: null };
  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  }
  submitHandler = () => {
    console.log(this.state.data);
  };
  render() {
    return (
      <ul>
        {this.state.data
          ? this.state.data.map((user) => {
              return (
                <div>
                  <Link to={`/api/${user.id}`}>
                    {user.id}
                    <br />
                    {user.employee_name}
                  </Link>
                </div>
              );
            })
          : "loading"}
      </ul>
    );
  }
}
export default Post;
