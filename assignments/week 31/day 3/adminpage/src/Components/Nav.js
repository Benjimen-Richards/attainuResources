import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to='/'>Admin page</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/new' class="nav-link active">Add new user</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Nav