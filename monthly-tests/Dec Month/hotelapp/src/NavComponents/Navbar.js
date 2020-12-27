import { Link } from "react-router-dom";
import '../Css/Navbar.css'
const Navbar = () => {
    const token = sessionStorage.getItem('logintoken')
    console.log(token)

    return (
        < nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    Triping.com
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/viewbooking">
                                Booking
                            </Link>
                        </li>
                        <li class="nav-item">

                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/users">
                                Users
                        </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin">
                                Admin
                        </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/profile">
                                Profile
                        </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="nav navbar-nav navbar-right" id='navbarlogin' >
                        <Link to='/register'><button type="button" class="btn btn-primary">Register</button></Link>
                        <Link to='/login'><button type="button" class="btn btn-primary">Login</button></Link>

                    </ul>
                </div>
            </div>
        </nav >
    );
};
export default Navbar;
