import React, {Component} from 'react'

class Video extends Component{
    render(){
        return(
            <div className="video">
                <video
                   autoPlay={this.props.autoplay}
                    src={this.props.url}
                   muted
                />
            </div>
        )
    }

}
export default Video;

