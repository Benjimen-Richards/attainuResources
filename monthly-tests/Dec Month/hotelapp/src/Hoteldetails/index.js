import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const detailsurl = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            tripid: sessionStorage.getItem("tripid"),
            hoteldata: "",
        };
    }
    renderelement = (data) => {
        console.log(data)
        if (data) {
            const item = this.state.hoteldata
            return (

                <div class="card mb-3" style={{ width: "80%", height: "80%" }}>
                    <img src={item.thumb} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">
                            <i>{item.name}</i>
                        </h5>
                        <p class="card-text">Address:{item.address}</p>
                        <p class="card-text">Cost per Night :{item.cost}</p>
                        <p class="card-text">
                            <Link to={`/hotelbooking/${item._id}`}>
                                <button>Booking</button>
                            </Link>
                        </p>
                    </div>
                </div>
            );
        }
    };
    render() {

        sessionStorage.setItem('hotelimage', this.state.hoteldata.thumb)
        sessionStorage.setItem('cost', this.state.hoteldata.cost)
        sessionStorage.setItem('hotelname', this.state.hoteldata.name)
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                {this.renderelement(this.state.hoteldata)}
            </div>
        );
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await Axios.get(`${detailsurl}/${id}`, {
            method: "GET",
        });
        this.setState({ hoteldata: response.data[0] });

    }
}

export default Details;
