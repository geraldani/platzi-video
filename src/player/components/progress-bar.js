import React from 'react';
import './styles/progressBar.css'

const ProgressBar = props => {
    return (
        //usando la etiqueta progress
        //<progress max={props.duration} value={props.currentTime} className="progressBar"/>
        //usando el input con type range
        <input type="range"
               max={props.duration}
               value={props.currentTime}
               className="progressBar"
               onChange={props.handleProgressChange}/>
    )
};

export default ProgressBar;