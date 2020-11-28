import React from "react";

class Singlepost extends React.Component {
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
        {this.state.data &&
          this.state.data.map((user) => {
            return <h1 key={user.id}>{user.employee}</h1>;
          })}
        <div>
          <h1>Employee here</h1>
        </div>
      </ul>
    );
  }
}
export default Singlepost;
