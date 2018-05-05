import React, {Component} from 'react'
import './styles/timer.css'



const Timer  = (props) => (
    <div className="timer">
        {props.currentTime} / {props.duration}

    </div>
);
export default Timer;