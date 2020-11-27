import React from "react";
import "../styles.css";

class Singlepost extends React.Component {
  state = { data: null };
  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data ? (
          <div>
            <h1>
              {this.state.data.id} ===> {this.state.data.title}
            </h1>
          </div>
        ) : (
          "loading"
        )}
      </div>
    );
  }
}
export default Singlepost;
