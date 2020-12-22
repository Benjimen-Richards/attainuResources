import React from 'react'
const nasa_url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = 'ri0EZkle2DPanZWtyS8oZFgC4coub86CDtV5OiYV';
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            date: '',
            info: ''
        }
    }
    chnagehandler = (e) => {
        const value = e.target.value
        this.setState({ date: value })

    }
    submithandler = () => {
        fetch(`${nasa_url}${api_key}&date=${this.state.date}`, {
            method: 'GET'
        }).then(res => res.json()).then(res => this.setState({ info: res }))
    }
    renderinfo = (data) => {
        if (data) {
            console.log(this.state.info)
            return (
                <div>
                    <li><b>Date:</b>{data.date}</li><br />
                    <li><b>Explanation:</b>{data.explanation}</li><br />
                    <li><b>Hdurl:</b>{data.hdurl}</li><br />
                    <li><b>Title:</b>{data.title}</li><br />
                    <li><b>Image:<br /></b><img src={data.url} alt='/' /></li><br />
                </div>

            )
        }
    }
    render() {
        return (
            <div>
                <h1>Nasa Apod Page</h1>
                <input type='date' onChange={this.chnagehandler} />
                <button onClick={this.submithandler}>Submit</button>
                <br />
                {this.renderinfo(this.state.info)}
            </div>
        )
    }
    // componentDidMount() {
    //     
    // }
}
export default Main