import { Component } from 'react'

class FeatArticle extends Component {

    render() {
        return (
            <div className="featArticle">
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        )
    }

}

export default FeatArticle