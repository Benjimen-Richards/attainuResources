import React from "react";
import Roomfilter from "../Filters/Roomfilter";
import ListingDisplay from "./Listdisplay";
import Costfilter from '../Filters/Costfilter'

const Hotellist = "https://developerfunnel.herokuapp.com/hotellist";
class Hotellisting extends React.Component {
  constructor() {
    super();
    this.state = {
      hotelsdata: "",
    };
  }

  setdata = (data) => {
    console.log(data);
    if (data) {
      this.setState({ hotelsdata: data });
    }
    else {
      return (<h1>no data found for given options</h1>)
    }
  };
  setcostfilter = (data) => {
    console.log(data.length);
    if (data) {
      this.setState({
        hotelsdata: data,
      });
    }
    else {
      return (<h1>No data found for given options</h1>)
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-2">

          <Roomfilter filtereddata={(data) => this.setdata(data)} />
          <Costfilter costfilter={(value) => this.setcostfilter(value)} />
        </div>
        <div className="col-md-10">
          <ListingDisplay data={this.state.hotelsdata} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const tripid = this.props.match.params.id;
    sessionStorage.setItem("tripid", tripid);
    fetch(`${Hotellist}/${tripid}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => this.setState({ hotelsdata: res }));
  }
}
export default Hotellisting;
