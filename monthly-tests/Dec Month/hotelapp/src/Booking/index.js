import React from "react";

const burl = 'http://localhost:9055/Bookings'
class HotelBooking extends React.Component {
    constructor() {
        super();
        this.state = {
            Orderid: Math.floor(Math.random() * 10001),
            hotelname: sessionStorage.getItem('hotelname'),
            name: '',
            phoneNumber: '',
            image: sessionStorage.getItem('hotelimage'),
            cost: sessionStorage.getItem('cost'),
            error: '',
            phnerror: '',
            status: 'Pending',
            date: ''
        };
    }
    changehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    renderbooking = (data) => {
        console.log('booking', this.state.bookings)
        if (data) {
            return (
                <div>
                    <div>
                        <div class="imgcontainer">
                            <img src={this.state.image} alt="/" class="avatar" />
                        </div>
                        <div class="container">
                            <label for="uname"><b>OrderID</b></label>
                            <input type="text" name="Orderid" value={parseInt(data.Orderid)} disabled />
                            <label for="psw"><b>Hotelname</b></label>
                            <input type="text" name="hotelname" value={data.hotelname} disabled />
                            <label for="psw"><b>Cost</b></label>
                            <input type="text" value={this.state.cost} name="name" placeholder='Enter your name' disabled />

                            <label for="psw"><b>Name</b></label>
                            <input type="text" onChange={this.changehandler} name="name" placeholder='Enter your name' required />

                            <div>
                                <span><i>{this.state.error}</i></span>
                                <br />
                            </div>

                            <label for="psw"><b>Phone-number</b></label>
                            <input type="number" onChange={this.changehandler} name="phoneNumber" placeholder='Enter your phone number' style={{ width: '100%', height: '50px', padding: '10px' }} />
                            <div>
                                <span><i>{this.state.phnerror}</i></span>
                                <br />
                            </div>
                            <label for="psw"><b>Date</b></label>
                            <input type="date" onChange={this.changehandler} name="date" placeholder='Enter your phone number' style={{ width: '100%', height: '50px', padding: '10px' }} />
                            <div></div>
                            <button onClick={this.buttonhandler}>Submit</button>
                        </div>
                    </div>
                </div>

            );
        }
    };
    buttonhandler = () => {
        if (!this.state.name) {
            this.setState({ error: 'Name is required' })
        }

        else if (!this.state.phoneNumber) {
            this.setState({ phnerror: 'Phone Number is required' })
        }
        else {
            fetch(burl,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                })
                .then
                (this.props.history.push('/viewbooking'))
        }

    }

    render() {
        return <div>{this.renderbooking(this.state)}</div>;
    }
}
export default HotelBooking;
