
import React from 'react'
const Registerurl ='http://localhost:5000/api/auth/register'
class Register extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    changehandler=(e)=>
    {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
    }
    submithandler=()=>
    {
        
        console.log(this.state)
        fetch(Registerurl,{
            method:'Post',
            headers:
                {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },body:JSON.stringify(this.state)
            }
        ).then(this.props.history.push('/login'))

    }
    render()
    {
    return( <div  >
        <div>
            <h1>Register Page</h1>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter Email Address</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={this.changehandler} value={this.state.email} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="name" value={this.state.name} onChange={this.changehandler} placeholder="Name" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={this.changehandler} value={this.state.password}/>
            </div>
            
            <button type="submit" class="btn btn-primary"  onClick={this.submithandler}>Submit</button>
            </div>
        </div>
    )
}}
export default Register