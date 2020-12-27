import React from "react";
import Card from "./Bootstrapcards";
const hoteltypeurl = "https://developerfunnel.herokuapp.com/booking";
class QuickBooking extends React.Component {
  constructor() {
    super();
    this.state = {
      hoteltype: "",
    };
  }
  render() {
    return (
      <div class="row">
        <h1>Book According to ur vaction</h1>
        <Card data={this.state.hoteltype} />
      </div>
    );
  }
  componentDidMount() {
    fetch(hoteltypeurl, { method: "GET" })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          hoteltype: res,
        })
      );
  }
}
export default QuickBooking;
