import React from "react";
import "./Contactpage.css";
const initialState = {
  email: "",
  rememberMe: false,
  gender: "",
  emailError: "",
  checked: "",
  genderError: "",
  submitmessage: "",
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
    let emailError = "";
    let checked = "";
    let genderError = "";
    if (!this.state.rememberMe) {
      checked = "please select check box";
    }
    if (!this.state.email) {
      emailError = "Email field is required";
    }
    if (!this.state.gender) {
      genderError = "selecting gender is mandatory";
    }
    if (emailError || checked || genderError) {
      this.setState({ emailError, checked, genderError });
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
      this.setState({
        submitmessage:
          "Your details have reached me...Thank you for ur efforts",
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="Formbody">
          <form onSubmit={this.submitHandler} className="Form">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.changeHandler}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                style={{ textAlign: "center" }}
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
            <h2>
              Welcome to my porfolio! <br />
              looking to work with U
            </h2>
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
              Submit to send uer details
            </button>
            <br />
            <span>
              <i>{this.state.submitmessage}</i>
            </span>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default FormJs;
