import axios from 'axios'
const { Component } = require("react");
const users_url = 'http://localhost:1234/admin'
const deleturl = 'http://localhost:1234/delete/'
class Admin_page extends Component {
    constructor() {
        super()
        this.state = {
            users: ''
        }
    }
    deletedata = (id) => {

        axios(
            {
                method: "DELETE",
                url: `${deleturl}${id}`
            }
        )
        this.props.history.push('')
    }
    rendertable = (data) => {
        if (data) {
            return data.map(data => (
                <tr>
                    <th scope="row">{data._id}</th>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                    <td >{data.role}</td>
                    <td>
                        <button class="btn btn-warning">Edit</button>
                        {/* <button class="btn btn-danger">Delete</button> */}
                        <button class="btn btn-danger" onClick={() => this.deletedata(data._id)}>Delete</button>
                    </td>
                </tr>
            ))
        }
    }

    render() {
        return (
            <div>

                <h1>Admin page</h1>
                <div >
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">_id</th>
                                <th scope="col">name</th>
                                <th scope="col">phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">role</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.rendertable(this.state.users)}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
    async componentDidMount() {
        await axios.get(users_url).then(res => this.setState({ users: res.data }))
    }
}
export default Admin_page