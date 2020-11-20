import React from "react";
class Signup extends React.Component {
  state = {
    name: "",
    favpet: "",
    rememberMe: false,
  };
  handlerName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //   handlerpet = (e) => {
  //     this.setState({ favpet: e.target.value });
  //   };
  handlercheck = (e) => {
    this.setState({ rememberMe: e.target.checked });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          name
          <input
            name="name"
            value={this.state.name}
            onChange={this.handlerName}
          />
          <br />
          favpet
          <input
            name="favpet"
            value={this.state.favpet}
            onChange={this.handlerName}
          />
          <br />
          <input
            type="checkbox"
            value={this.state.rememberMe}
            onChange={this.handlercheck}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </>
    );
  }
}

export default Signup;
