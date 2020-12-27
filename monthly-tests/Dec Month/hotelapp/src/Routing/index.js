import { Route } from "react-router"
import Home from "../NavComponents/Home"
import Navbar from "../NavComponents/Navbar"
import Profile from "../NavComponents/Profile"
import Hotellists from '../HotelListing/Hotellisting'
import Details from "../Hoteldetails"
import HotelBooking from "../Booking"
import Booking from "../Booking/Bookingcontainer"
import LoginComponent from "../Login/Logincomponent"
import Registercomponent from "../Login/RegisterComponent"
import User from "../Login/User/Users"
import Admin from "../NavComponents/Adminpage"
import Profilepage from "../NavComponents/Profile"
import Userprofile from '../Login/User/Userprofile'
const Routing = () => {
    return (
        <div>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profilepage} />
            <Route path='/hoteltype/:id' component={Hotellists} />
            <Route path='/details/:id' component={Details} />
            <Route path='/hotelbooking/:id' component={HotelBooking} />
            <Route path='/viewbooking' component={Booking} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/register' component={Registercomponent} />
            <Route path='/users' component={User} />
            <Route path='/admin' component={Admin} />
            <Route path='/userprofile' component={Userprofile} />
        </div>
    )
}
export default Routing