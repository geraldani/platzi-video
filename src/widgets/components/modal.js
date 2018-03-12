import React from 'react'
import './modal.css'

function Modal (props){
	return (
		// <div className="modalContainer">{/*usando la forma sin CSS*/}
		  <div className="modalContainer modal-close" id="contenedorModal">{/*usando la forma con css*/}
			  {props.children}
		  	<h2>Estas viendo</h2>
			<h3 id="reproduciendoInfo"><span>titulo</span> - <span>autor</span></h3>
			<button onClick={props.handleClick}>CERRAR</button>
		</div>
	)
}
export default Modal