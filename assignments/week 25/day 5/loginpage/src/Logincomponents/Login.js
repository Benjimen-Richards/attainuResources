import React from 'react'
const loginurl=" http://localhost:5000/api/auth/login";
class Login extends React.Component
{
    constructor()
    {
        super()
        this.state={

            email:'',
            password:'',
            error:''
        }
    }
    changehandler=(e)=>
    {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
    }
    submithandler=(e)=>
    {
        e.preventDefault()
        console.log(this.state)
        fetch(loginurl,
            {
                method:'POST',
                headers:
                {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },body:JSON.stringify(this.state)
            }
        ).then(
            res=>res.json()
        ).then(
            res=>
            {sessionStorage.setItem('logintoken',res.token)
            this.props.history.push('/profile')}
        )
        .catch(err=>this.setState({error:'Error'}))
    }
    render()
    {
    return( <form  onSubmit={this.submithandler}>

    <h1>Login Page</h1>
        <div>
           <h1>{this.state.error}</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Email Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={this.changehandler} value={this.state.email} />
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={this.changehandler} value={this.state.password}/>
  </div>
  
  <button type="submit" class="btn btn-primary"  >Submit</button>
</div>
        </form>
    )
}}
export default Login