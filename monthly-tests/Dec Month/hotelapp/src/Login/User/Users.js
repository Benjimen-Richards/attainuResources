import React from 'react'
const url = 'http://localhost:5000/api/auth/users'
class User extends React.Component {
    constructor() {
        super()
        this.state = {
            users: ''
        }
    }
    list = (data) => {
        if (data) {
            return (
                data.map(item =>
                    <div>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                    </div>)
            )
        }
    }
    render() {
        console.log('users', this.state.users)
        return (
            <div>{this.list(this.state.users)}</div>
        )
    }
    componentDidMount() {
        fetch(url, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => { this.setState({ users: data }) })
    }
}
export default User