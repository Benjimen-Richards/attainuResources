import React from "react";
const Hotellist = " https://developerfunnel.herokuapp.com/hotels";
class Costfilter extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      cost: "",
    };
  }
  Costfilter = (e) => {
    const cost = e.target.value;
    const data = this.state.data;
    let output;
    if (cost) {
      output = data.filter((item) => {
        return item.cost < cost;
      });
    } else {
      output = data;
    }

    this.props.costfilter(output);
  };
  render() {
    return (
      <div>
        <div className="col-sm">
          <centre>Cost Filter</centre>
          <div
            onChange={this.Costfilter}
            style={{
              textAlign: "left",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label className="radio">
              <input type="radio" value="" name="cost" />
              No filter
            </label>
            <label className="radio">
              <input type="radio" value="3000" name="cost" />
              less than 3000
            </label>
            <label className="radio">
              <input type="radio" value="4000" name="cost" />
              less than 4000
            </label>
            <label className="radio">
              <input type="radio" value="5000" name="cost" />
              less than 5000
            </label>
            <label className="radio">
              <input type="radio" value="6000" name="cost" />
              less than 6000
            </label>
            <label className="radio">
              <input type="radio" value="8000" name="cost" />
              less than 8000
            </label>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch(Hotellist, { method: "GET" })
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
}
export default Costfilter;
