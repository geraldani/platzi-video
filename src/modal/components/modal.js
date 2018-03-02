import React from 'react'
import './modal.css'

function Modal (props){
	return (
		// <div className="modalContainer">{/*usando la forma sin CSS*/}
		  <div className="modalContainer modal-close" id="contenedorModal">{/*usando la forma con css*/}
			<h1>este si es mi modal</h1>
			<button onClick={props.handleClick}>CERRAR</button>
		</div>
	)
}
export default Modal