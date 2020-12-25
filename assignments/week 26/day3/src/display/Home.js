import React from 'react'
import { connect } from 'react-redux'
import { gallery, movies } from '../Action/actionfiles'
import App from '../App'

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(movies())
        this.props.dispatch(gallery())
    }
    render() {
        return (
            <div>
                <h1>Article</h1>
                <App data={this.props.article} />
                <h1>Gallery</h1>
                <App data={this.props.gallery} />
            </div>
        )
    }
}
const mapstatetoprops = (state) => {
    return {
        article: state.moviesreducer.data,
        gallery: state.galleryreducer.gallerylist

    }

}
export default connect(mapstatetoprops)(Home)