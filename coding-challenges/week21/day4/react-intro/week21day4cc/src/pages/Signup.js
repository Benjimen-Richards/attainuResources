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
        nameError: "",
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
      error: "",
    };

    // this.validationHandler = this.validationHandler.bind(this)
  }

  validationHandler(key) {
    let nameError = "";
    if (!this.state.email.name) {
      nameError = "name cannot be blank";
    }
    if (nameError) {
      this.setState({ nameError });
    }
  }

  onSubmitHandler = (event) => {
    const valid = this.validationHandler();
    if (valid) {
      console.log(this.state);
    }
  };

  inputChangehandler = (key, value) => {
    this.setState(
      {
        [key]: {
          ...this.state[key],
          value: value,
        },
      },
      () => {
        this.validationHandler(key);
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
