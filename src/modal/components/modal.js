import React from 'react'
import modalStyle from './modal.css'

function Modal (props){
	return (
		// <div className={props.isToggleOn ? "modalContainer" : "modalContainer modal-close"}>
		<div className="modalContainer">
			{props.children}
			<button onClick={props.handleClick}>
			{
				props.isToggleOn ? 'ON' : 'OFF'
			}
			</button>
		</div>
	)
}
export default Modal