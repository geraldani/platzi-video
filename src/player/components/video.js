import React, {Component} from 'react'

class Video extends Component{
    togglePlay = ()=>{
        this.props.playing ? this.videoElement.play() : this.videoElement.pause()
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.playing !== this.props.playing){
            this.togglePlay();
        }
    }

    render(){
        return(
            <div className="video">
                <video
                   autoPlay={this.props.autoplay}
                    src={this.props.url}
                   muted
                   ref={ elementHTML => this.videoElement = elementHTML}
                />
            </div>
        )
    }

}
export default Video;

