import React from 'react'
import './styles/videoPlayer.css'

const VideoPlayerLayout = (props)=>(
    <div className="video-player">
        {props.children}
    </div>
);
export default VideoPlayerLayout;