import Navbar from "./Navbar"
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "../Home";
import Login from "../Logincomponents/Login";
import Register from "../Logincomponents/Register";
import Profile from "../Logincomponents/Profile";
const Routing =()=>
{
    return(
        <div>
<BrowserRouter>
<div>
<Navbar/>
<Route exact path='/' component={Home}/>
<Route path='/login' component={Login}/>
<Route path='/register' component={Register}/>
<Route path='/profile' component={Profile}/>
</div>
</BrowserRouter>
        
        </div>
    )
}
export default Routing