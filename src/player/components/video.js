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
        const {
            handleSeeking,
            handleSeeked
        } = this.props;
        return(
            <div className="video">
                <video
                   autoPlay={this.props.autoplay}
                   src={this.props.url}
                   ref={ elementHTML => this.videoElement = elementHTML}
                   onLoadedMetadata={this.props.handleLoadedMetaData}
                   onTimeUpdate={this.props.handleTimeUpdate}
                   onSeeking={handleSeeking}
                   onSeeked={handleSeeked}
                />
            </div>
        )
    }
}
export default Video;

