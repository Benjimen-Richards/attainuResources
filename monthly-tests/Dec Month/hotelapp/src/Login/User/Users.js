import { Component } from "react";

const url = " http://localhost:5000/api/auth/users";

class User extends Component {
    render() {
        return (
            <div>
                User
            </div>
        )
    }
    componentDidMount() {
        fetch(url, { method: 'GET' }).then(res => res.json()).then(res => console.log('r', res))
    }
}
export default User