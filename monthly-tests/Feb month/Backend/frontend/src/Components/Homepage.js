import {Component} from 'react'
const googleurl='http://localhost:1111/google/auth/google'
class Homepage extends Component{


    googlehandler=()=>
    {
        window.location.href=googleurl
    }
    jwthandler=()=>
    {
        window.location.href=''
    }
    render()
    {
        return(
            <div>
                <button onClick={this.googlehandler}>Login with Google</button>
                <button onClick={this.jwthandler}>Login with jwt</button>
            </div>
        )
    }
}

export default Homepage