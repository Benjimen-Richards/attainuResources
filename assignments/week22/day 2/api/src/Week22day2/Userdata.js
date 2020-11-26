import axios from "axios";
// import Xyz from "./xyz";
import React from "react";
import xyz from "./xyz";
import Xyz from "./xyz";
class Userdata extends React.Component {
  state = {
    message: [],
  };
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random Fetch!")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ message: data.message });
      });
  }
  render() {
  }
export default Userdata;
