
import axios from "axios";
import { Component } from "react";

const bookingsurl = 'http://localhost:9055/Bookings'


class Admin extends Component {
    constructor() {
        super()
        this.state = {
            bookings: ''
        }
    }
    renderbookings = (data) => {
        if (data) {
            return data.map(item =>
            (<tr>
                <th scope="row">{item.Orderid}</th>
                <td>{item.hotelname}</td>
                <td>{item.cost}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <button value={item.Orderid} style={{ color: 'black', border: '1px solid black' }} onClick={this.buttonhandler}>Confirm</button>
                <button value={item.Orderid} style={{ color: 'black', border: '1px solid black' }} onClick={this.rejecthandler}>Reject</button>
            </tr>))
        }
    }
    rejecthandler = (e) => {
        const value = e.target.value
        console.log(value)
        const url = `${bookingsurl}?Orderid=${value}`
        axios.delete(url).then(res => {
            console.log(res);
        }
        )

    }
    buttonhandler = (e) => {
        const value = e.target.value
        let data = this.state.bookings.filter(item => parseInt(item.Orderid) === parseInt(value))
        const info = { ...data, status: 'Confirmed' }
        const url = `${bookingsurl}?Orderid=${value}`
        axios.post(url, info).then(res => console.log(res))

    }
    render() {

        // if (sessionStorage.getItem('logintoken') == null) {
        //     this.props.history.push('/login')
        // }
        // if (sessionStorage.getItem('logintoken') !== null && sessionStorage.getItem('roletoken') !== "Admin") {
        //     this.props.history.push('/profile?message=You Are Not Admin')
        // }
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