import React from "react";
import Costfilter from "../Listing/Costfilter";
import ListingDisplay from "../Listing/Listdisplay";

const Hotellist = " https://developerfunnel.herokuapp.com/hotels";
class Hoteldata extends React.Component {
  constructor() {
    super();
    this.state = {
      hotelsdata: "",
    };
  }

  setcostfilter = (data) => {
    console.log(data);
    if (data) {
      this.setState({
        hotelsdata: data,
      });
    } else {
      return <h1>No data</h1>;
    }
  };
  render() {
    console.log(this.state.hotelsdata);
    return (
      <div className="row">
        <div className="col-md-2">
          <Costfilter costfilter={(value) => this.setcostfilter(value)} />
        </div>
        <div className="col-md-10">
          <ListingDisplay data={this.state.hotelsdata} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch(Hotellist, { method: "GET" })
      .then((res) => res.json())
      .then((res) => this.setState({ hotelsdata: res }));
  }
}
export default Hoteldata;
