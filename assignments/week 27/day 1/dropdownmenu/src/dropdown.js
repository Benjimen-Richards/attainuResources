import axios from 'axios'
import React, { Component } from 'react'
const url = 'http://localhost:1234/data'
class Dropdown extends Component {
    constructor() {
        super()
        this.state = {
            data: '',
            input: ''
        }
    }
    renderselect = (data) => {
        if (data) {
            return (
                data.map(item => (
                    <option>{item.moviename}</option>))
            )
        }
    }
    handler = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    changehandler = () => {
        // let data = JSON.stringify(this.state.input)
        axios.post(url, ...this.state.input)
    }
    render() {
        console.log(this.state.input)
        return (
            <div>
                <select>
                    <option>---select--</option>
                    {this.renderselect(this.state.data)}
                </select>
                <input name='input' value={this.state.input} onChange={this.handler} />
                <button onClick={this.changehandler}>Addtolist</button>
            </div>
        )
    }
    componentDidMount() {
        axios.get(url).then(res => this.setState({ data: res.data }))

    }
}
export default Dropdown