import { BrowserRouter } from "react-router-dom"
const { Route } = require("react-router")
const { default: Add_user } = require("../Components/Add_user")
const { default: Admin_page } = require("../Components/Admin_page")
const { default: Nav } = require("../Components/Nav")

const Routing = () => {
    return (
        <div>
            <Nav />
            <div>
                <Route path='/' exact component={Admin_page} />
                <Route path='/new' component={Add_user} />
            </div>
        </div >
    )
}
export default Routing