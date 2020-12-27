import React from 'react';
const burl = "http://localhost:5000/api/auth/register"
class Registercomponent extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',

    }
    handlerchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        // console.log(this.state)
        fetch(burl, {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(this.props.history.push('/login'))

    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Register Component</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label"><b>Name</b></label>
                            <input type="text" name="name" value={this.state.name} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"><b>Email</b></label>
                            <input type="email" name="email" value={this.state.email} className="form-control"
                                onChange={this.handlerchange} />
                        </div>

                        <div className="form-group">
                            <label className="control-label"><b>Password</b></label>
                            <input type="password" name="password" value={this.state.password} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Registercomponent