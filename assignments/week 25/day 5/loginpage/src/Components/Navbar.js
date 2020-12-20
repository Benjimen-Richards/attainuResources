import { Link } from "react-router-dom"

const Navbar =()=>
{
  return(
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <Link class="navbar-brand" to="/login">Login</Link>
                    <Link class="navbar-brand" to="/register">Register</Link>
                    <Link class="navbar-brand" to="/users">Users</Link>
                    </div>
                </div>
        </nav>
      </div>
  )  
}
export default Navbar