import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../components/video'
import PlayPause from '../components/play-pause'

class VideoPlayer extends Component{
    state = {
        isPlayed: false
    };
    handleToggleClick = (evento)=>{
        this.setState({
            isPlayed: !this.state.isPlayed,
        });
       /* if(action==="play"){
            this.setState({
                isPlayed: true,
            });
        }
        if(action==="pause") {
            this.setState({
                isPlayed: false,
            });
        }*/
        console.log(this.state.isPlayed)
    };

    render(){
        return(
            <VideoPlayerLayout>
                <Title title="Esto es un video chido"/>
                <Video
                    url="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoplay={true}
                />
                <PlayPause
                    isPlayed={this.state.isPlayed}
                    handleClick={this.handleToggleClick}/>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;