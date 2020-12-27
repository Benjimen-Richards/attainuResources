import { Route } from "react-router"
import Home from "../NavComponents/Home"
import Navbar from "../NavComponents/Navbar"
import Hotellists from '../HotelListing/Hotellisting'
import Details from "../Hoteldetails"
import HotelBooking from "../Booking"
import Booking from "../Booking/Bookingcontainer"
import Admin from "../NavComponents/Adminpage"
import Logincomponent from '../Login/Logincomponent'
import Registercomponent from '../Login/RegisterComponent'
import Users from '../Login/Userlist'
import Profile from '../Login/Profile'
const Routing = () => {
    return (
        <div>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/hoteltype/:id' component={Hotellists} />
            <Route path='/details/:id' component={Details} />
            <Route path='/hotelbooking/:id' component={HotelBooking} />
            <Route path='/viewbooking' component={Booking} />
            <Route path='/login' component={Logincomponent} />
            <Route path='/register' component={Registercomponent} />
            <Route path='/users' component={Users} />
            <Route path='/admin' component={Admin} />
            <Route path='/profile' component={Profile} />
        </div>
    )
}
export default Routing