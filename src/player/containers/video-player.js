import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../components/video'
import PlayPause from '../components/play-pause'

class VideoPlayer extends Component{
    state = {
        isPlayed: this.props.autoplay
    };
    handleToggleClick = (evento)=>{
        this.setState({
            isPlayed: !this.state.isPlayed,
        });
    };
    componentDidMount(){
        this.setState({
            isPlayed: !this.props.autoplay
        })
    }

    render(){
        return(
            <VideoPlayerLayout>
                <Title title="Esto es un video chido"/>
                <Video
                    url="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoplay={this.props.autoplay}
                />
                <PlayPause
                    isPlayed={this.state.isPlayed}
                    handleClick={this.handleToggleClick}/>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;