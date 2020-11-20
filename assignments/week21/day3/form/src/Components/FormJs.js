import React from "react";
const initialState = {
  email: "",
  password: "",
  rememberMe: false,
  gender: "",
  emailError: "",
  passwordError: "",
  checked: "",
  genderError: "",
};
class FormJs extends React.Component {
  state = initialState;
  checkHandler = (e) => {
    this.setState({
      rememberMe: e.target.value,
    });
    console.log(this.state.rememberMe);
  };
  changeHandler = (e) => {
    console.log("called");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  checkHandler = (e) => {
    this.setState({ rememberMe: e.target.checked });
  };
  isValid = () => {
    let passwordError = "";
    let emailError = "";
    let checked = "";
    let genderError = "";
    if (!this.state.rememberMe) {
      checked = "please select check box";
    }
    if (!this.state.email) {
      emailError = "Email field is required";
    }
    if (!this.state.password) {
      passwordError = "password is required";
    }
    if (!this.state.gender) {
      genderError = "selecting gender is mandatory";
    }
    if (passwordError || emailError || checked || genderError) {
      this.setState({ passwordError, emailError, checked, genderError });
      return false;
    }
    return true;
  };
  submitHandler = (e) => {
    e.preventDefault();
    const valid = this.isValid();
    if (valid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              //   type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <br />
            <span
              style={{
                color: "red",
              }}
            >
              {this.state.emailError}
            </span>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              name="password"
              value={this.state.password}
              type="password"
              onChange={this.changeHandler}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <br />
          <span style={{ color: "red" }}>{this.state.passwordError}</span>
          <div class="form-group form-check">
            <input
              type="checkbox"
              checked={this.state.rememberMe}
              onChange={this.checkHandler}
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Do you agree with terms and conditions
            </label>
            <br />
            <span style={{ color: "red" }}>{this.state.checked}</span>
          </div>
          <label>Gender</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.changeHandler}
          />
          <label>male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.changeHandler}
          />
          <label>female</label>
          <br />
          <span style={{ color: "red" }}>{this.state.genderError}</span>
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default FormJs;
