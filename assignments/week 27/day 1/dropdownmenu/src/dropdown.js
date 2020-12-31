import React from 'react'
const url = 'http://localhost:1234'
class Dropdown extends React.component {
    render() {
        return (
            <div>
                <select>
                    <option>---select--</option>
                </select>
            </div>
        )
    }
    componentDidMount() {
        .get(url)
    }
}
export default Dropdown