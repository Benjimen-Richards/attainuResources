
import axios from "axios";
import { Component } from "react";

const bookingsurl = 'http://localhost:9055/Bookings'
const update = 'http://localhost:9055/Bookings?Orderid='
const api = axios.create({ update })
class Admin extends Component {
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
                        <button value={item.Orderid} style={{ color: 'black', border: '1px solid black' }} onClick={this.buttonhandler}>Confirm</button>
                    </tr>
                ))
            )
        }

    }
    getdata = () => {

    }
    buttonhandler = (e) => {
        const value = e.target.value
        const data = this.state.bookings.filter(item => parseInt(item.Orderid) === parseInt(value))[0]
        const info = { ...data, status: 'yes' }
        console.log(info)
        const re = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(info)
        };
        fetch(`http://localhost:9055/Bookings?Orderid=${value}`, re).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err, 'err'))
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
                            <th scope="col">Confirm</th>

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
        fetch(bookingsurl, { method: 'GET' }).then(res => res.json()).then(res => this.setState({ bookings: res }))

    }

}
export default Admin;