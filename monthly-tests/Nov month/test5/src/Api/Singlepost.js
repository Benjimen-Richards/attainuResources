import React from "react";

class Post extends React.Component {
  state = { data: null };
  componentDidMount() {
    fetch(
      `http://dummy.restapiexample.com/api/v1/employees/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  }
  submitHandler = () => {
    console.log(this.state.data);
  };
  render() {
    console.log(this.props);
    return (
      <ul>
        <div>
          <h1>Empolyee Here </h1>
        </div>
      </ul>
    );
  }
}
export default Post;
