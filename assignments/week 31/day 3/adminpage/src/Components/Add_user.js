import axios from "axios";

const { Component } = require("react");
const posturl = 'http://localhost:1234/adduser'
class Add_user extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: "",
            phone: "",
            role: "",
            city: ""
        }
    }
    inputhandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submithandler = (e) => {
        e.preventDefault()
        const { data } = axios({
            method: 'POST',
            url: posturl,
            data: this.state,
        })
        this.props.history.push('/')
    }
    render() {
        return (
            <div style={{
                padding: "100px"
            }}>
                <form >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name='name' value={this.state.name} onChange={this.inputhandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="text" name='email' value={this.state.email} onChange={this.inputhandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input type="number" class="form-control" name='phone' onChange={this.inputhandler} value={this.state.phonex} id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">role</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.inputhandler} name='role' value={this.state.role} />
                    </div>
                    <button onClick={this.submithandler}>Add user</button>
                </form>
            </div>
        )
    }
}
export default Add_user