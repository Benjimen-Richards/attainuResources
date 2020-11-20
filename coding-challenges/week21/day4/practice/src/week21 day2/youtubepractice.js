import React from "react";

const initialstate = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};
class Practice extends React.Component {
  state = initialstate;
  isvalid = () => {
    let emailError = "";
    let nameError = "";
    let passwordError = "";
    if (!this.state.name)
      if (!this.state.name) {
        nameError = "cannot be blank";
      }

    if (!this.state.email.includes("@")) {
      emailError = "please enter valid email";
    }
    if (emailError || nameError) {
      this.setState({
        emailError,
        nameError,
      });
      return false;
    }
    return true;
  };
  Handler = (e) => {
    e.preventDefault();
    const valid = this.isvalid();
    if (valid) {
      console.log(this.state);
    }
  };
  handlerName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.Handler}>
          <input
            value={this.state.name}
            name="name"
            placeholder="name"
            onChange={this.handlerName}
          />
          <div>{this.state.nameError}</div>
          <input
            value={this.state.email}
            name="email"
            placeholder="email"
            onChange={this.handlerName}
          />
          <div>{this.state.emailError}</div>

          <input
            value={this.state.password}
            name="password"
            placeholder="password"
            type="password"
            onChange={this.handlerName}
          />
          <div>{this.state.passwordError}</div>

          <button type="submit">submit</button>
        </form>
      </>
    );
  }
}
export default Practice;
