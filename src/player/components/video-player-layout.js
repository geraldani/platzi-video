import React from 'react'
import './videoPlayer.css'

const VideoPlayerLayout = (props)=>(
    <div className="video-player">
        {props.children}
    </div>
);
export default VideoPlayerLayout;