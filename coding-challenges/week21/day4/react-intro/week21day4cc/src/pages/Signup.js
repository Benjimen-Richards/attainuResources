import React from "react";
import SignupForm from "../components/SignupForm";
let count = 0;
class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        name: "email",
        value: "",
        isRequired: true,
        error: "",
      },
      password: {
        name: "password",
        value: "",
        isRequired: true,
      },
      repeat_password: {
        name: "repeat_password",
        value: "",
        isRequired: false,
      },
      image: {
        name: "image",
        value: "",
        isRequired: false,
      },
      terms: {
        name: "terms",
        value: false,
        isRequired: true,
      },
      error: true,
    };

    // this.validationHandler = this.validationHandler.bind(this)
  }

  validationHandler(key) {
    const keyInfo = this.state[key];
    if (keyInfo.isRequired && !keyInfo.value) {
      this.setState({
        [key]: {
          ...this.state[key],
          error: "fill the above field",
        },
        error: true,
      });
    } else {
      this.setState({
        [key]: {
          ...this.state[key],
          error: "",
        },
        error: false,
      });
    }
  }

  onSubmitHandler = (event) => {
    if (event) {
      console.log("INSIDE IF CLASS BLOCK");
      event.preventDefault();
    }
    console.log(count);
    console.log(this.state);
  };

  inputChangehandler = (name, value) => {
    this.setState(
      {
        [name]: {
          ...this.state[name],
          value: value,
        },
      },
      () => {
        this.validationHandler(name);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.page}</h1>
        <SignupForm
          onSubmit={this.onSubmitHandler}
          changeHandler={this.inputChangehandler}
          formInfo={{
            image: this.state.image,
            email: this.state.email,
            password: this.state.password,
            repeat_password: this.state.repeat_password,
            terms: this.state.terms,
          }}
          error={this.state.error}
        />
      </React.Fragment>
    );
  }
}

export default Signup;
