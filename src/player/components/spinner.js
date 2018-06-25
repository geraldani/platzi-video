import React from 'react'
import './styles/spinner.css'

function Spinner(props) {
    if(!props.cargando) return null
    return(

        <div className="spinner">Cargando...</div>

    )
}
export default Spinner;