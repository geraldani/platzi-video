import React from 'react';
import './styles/play-pause.css'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'

function PlayPause (props) {
    return(
        <div className="PlayPause">
            {
                props.isPlayed ? //pregunta si la propiedad isPlayed es verdadera, y si lo es selecciona el boton de play sino seleccionara el de pause
                    <button onClick={props.handleClick}><Play color="white"/></button> :
                    <button onClick={props.handleClick}><Pause color="white"/></button>
            }
        </div>
    )
}
export default PlayPause;
