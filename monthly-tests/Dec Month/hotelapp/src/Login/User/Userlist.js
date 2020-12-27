import React, { Component } from 'react';

import User from './Users';

const url = " http://localhost:5000/api/auth/users";

class UserList extends Component {
    constructor() {
        super()

        this.state = {
            users: ''
        }
    }

    render() {
        // console.log('user',this.state.users)
        if (sessionStorage.getItem('logintoken') == null) {
            this.props.history.push('/login')
        }
        if (sessionStorage.getItem('logintoken') !== null && sessionStorage.getItem('roletoken') !== "Admin") {
            this.props.history.push('/profile?message=You Are Not Admin')
        }
        return (
            <User data={this.state.users} />
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

export default UserList;
