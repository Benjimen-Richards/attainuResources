import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
const url = 'http://localhost:1234/'
class App extends Component {
  constructor() {
    super()

    this.state = {
      data: ''

    }
  }
  renderdata = (data) => {
    if (data) {
      return data.map(item => (<p>{item.name}</p>))
    }
  }
  render() {
    console.log(this.state.data)
    return (
      <div style={{
        paddingLeft: '300px'
      }}>
        <h1>From Mongo to React</h1>
        {this.renderdata(this.state.data)}
      </div>
    )
  }
  componentDidMount() {
    axios.get(url).then(res => this.setState({ data: res.data }))
  }
}

export default App;
