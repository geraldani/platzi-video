import React from 'react'
import './styles/modal.css'

function Modal (props){
	return (
		// <div className="modalContainer">{/*usando la forma sin CSS*/}
		  <div className="modalContainer modal-close" ref={props.modalContainer}>{/*usando la forma con css*/}
			  {props.children}
		  	<h2>Estas viendo</h2>
			<h3 ref={props.titRef}>
				<span>titulo</span>
                &nbsp;-&nbsp;
				<span>autor</span></h3>
			<button onClick={props.handleClick}>CERRAR</button>
		</div>
	)
}
export default Modal