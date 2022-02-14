import { Component } from 'react'

class Article extends Component {

    render() {
        return (
            <div className="article">
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <div className="box">
                        <p>{this.props.commentnum} - Comments</p>
                        <p className="likes">{this.props.likesnum} - Likes</p>
                </div>
            </div>
        )
    }

}

export default Article