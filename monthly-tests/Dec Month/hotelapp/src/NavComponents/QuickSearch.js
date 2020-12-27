import React from "react";
import '../Css/Quicksearch.css';
import { withRouter } from 'react-router-dom'
const url = "https://developerfunnel.herokuapp.com/location";
const hotelurl = " https://developerfunnel.herokuapp.com/hotels?city=";
class Quicksearch extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      hotels: "",
    };
  }
  rendercity = (data) => {
    if (data) {
      return data.map((user) => (
        <option value={user.city}>{user.city_name}</option>
      ));
    }
  };
  selectChangehandler = (e) => {
    const value = e.target.value;
    fetch(`${hotelurl}${value}`, { method: "GET" })
      .then((Response) => Response.json())
      .then((Response) => this.setState({ hotels: Response }));
  };
  renderHotel = (hotels) => {
    if (hotels) {
      return hotels.map((hotel) => (
        <option value={hotel._id}>{hotel.name}</option>
      ));
    }
  };

  renderselect = (e) => {
    const value = e.target.value
    this.props.history.push(`/details/${value}`)
  }
  render() {
    console.log(this.props)
    return (
      <div className="quicksearch">
        <select onChange={this.selectChangehandler}>
          <option>====Select City====</option>
          {this.rendercity(this.state.location)}
        </select>
        <select onChange={this.renderselect}>
          <option>====Select hotel====</option>
          {this.renderHotel(this.state.hotels)}
        </select>
      </div>
    );
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((Response) => Response.json())
      .then((Response) => this.setState({ location: Response }));
  }
}
export default withRouter(Quicksearch)
