
import { Component } from "react";

const bookings = 'http://localhost:9055/Bookings'
class Booking extends Component {
    constructor() {
        super()
        this.state = {
            bookings: ''
        }
    }
    renderbookings = (data) => {
        if (data) {
            return (
                data.map(item =>
                (
                    <tr>
                        <th scope="row">{item.Orderid}</th>
                        <td>{item.hotelname}</td>
                        <td>{item.cost}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>

                    </tr>
                ))
            )
        }
    }
    render() {

        return (
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">OrderID</th>
                            <th scope="col">Hotelname</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Name of customer</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.renderbookings(this.state.bookings)}
                    </tbody>
                </table>


            </div>
        )
    }
    componentDidMount() {
        fetch(bookings, { method: 'GET' }).then(res => res.json()).then(res => this.setState({ bookings: res }))

    }

}
export default Booking;