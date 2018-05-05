import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../components/video'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import {formateTime} from '../../libs/utilities' //para formatear el tiempo

class VideoPlayer extends Component{
    state = {
        isPlayed: this.props.autoplay,
        videoDuration: 0,
        currentTimeVideo:0
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
    handleLoadedMetaData = event =>{
        this.video = event.target;
        this.setState({
            videoDuration: this.video.duration
        });
    };

    handleTimeUpdate = event =>{
        this.setState({
            currentTimeVideo: this.video.currentTime
        })
    };
    render(){
        return(
            <VideoPlayerLayout>
                <Title title={this.props.titulo}/>
                <Video
                    url="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoplay={this.props.autoplay}
                    playing={this.state.isPlayed}
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    handleTimeUpdate = {this.handleTimeUpdate}
                />
                <PlayPause
                    isPlayed={this.state.isPlayed}
                    handleClick={this.handleToggleClick}>
                        <Timer duration={formateTime(this.state.videoDuration)} currentTime={formateTime(this.state.currentTimeVideo)}/>
                </PlayPause>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;