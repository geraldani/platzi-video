import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../components/video'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import ProgressBar from '../components/progress-bar'//barra de progreso
import Volume from '../components/volume'//barra de progreso
import {formateTime} from '../../libs/utilities'
import Spinner from "../components/spinner"; //para formatear el tiempo

class VideoPlayer extends Component{
    state = {
        isPlayed: this.props.autoplay, //estado incial del estado de la reproduccion del video, por ddefecto se le setea al estado que se le ponga al video incialmente en la etiqueta video
        videoDuration: 0, //la duracion total del video
        currentTimeVideo:0, //el tiempo actual por el que va el video
        loading: false //estado incial de la carga del video
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
    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
    };

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    };

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    };

    render(){
        return(
            <VideoPlayerLayout>
                <Title title={this.props.titulo}/>
                <Video
                    // url="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    // url="./video/ADN.mp4"
                    url="http://www.intelix.biz/video/ADN.mp4"
                    autoplay={this.props.autoplay}
                    playing={this.state.isPlayed}
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    handleTimeUpdate = {this.handleTimeUpdate}
                    handleSeeking = {this.handleSeeking}
                    handleSeeked = {this.handleSeeked}
                />
                <Spinner
                    cargando = {this.state.loading}
                />

                <PlayPause
                    isPlayed={this.state.isPlayed}
                    handleClick={this.handleToggleClick}>
                        <Timer
                            duration={formateTime(this.state.videoDuration)}
                            currentTime={formateTime(this.state.currentTimeVideo)}/>
                        <ProgressBar
                            duration={this.state.videoDuration}
                            currentTime={this.state.currentTimeVideo}
                            handleProgressChange={this.handleProgressChange}/>
                        <Volume/>
                </PlayPause>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;