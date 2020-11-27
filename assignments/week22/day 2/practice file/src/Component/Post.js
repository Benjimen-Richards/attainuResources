import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
class Post extends React.Component {
  state = { data: null };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data
            ? this.state.data.map((user) => {
                return (
                  <div key={user.id}>
                    <Link to={`/${user.id}`}>
                      {user.id}
                      {user.title}
                      <br />
                    </Link>
                  </div>
                );
              })
            : "loading"}
        </ul>
      </div>
    );
  }
}
export default Post;
