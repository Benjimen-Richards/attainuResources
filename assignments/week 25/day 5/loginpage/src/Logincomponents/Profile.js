import React from 'react'
const url = "http://localhost:5000/api/auth/userinfo";
class Profile extends React.Component
{
    constructor()
    {
        super()
        this.state={
            user:''
        }
    }
    submithandler=()=>
    {
        sessionStorage.removeItem('logintoken')
        this.props.history.push('/login')
    }
    render()
    {
        const token =sessionStorage.getItem('logintoken')
        if(!token)
        {
               this.props.history.push('/login')
        }
        console.log("this.state.user",this.state.user)
        return(
            <div>
                    <h1>Name:
                        {this.state.user.name}
                    </h1>
                    <h1>Email:
                        {this.state.user.email}
                    </h1>
                    <button onClick={this.submithandler}>Logout </button>
            </div>
        )
    }
    componentDidMount()
    {
        fetch(url,{
            method:'get',
            headers:{
                'x-access-token':sessionStorage.getItem('logintoken')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}
export default Profile