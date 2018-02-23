import React, {Component} from 'react';
import {createPortal} from 'react-dom';

class ModalContainer extends Component{
	render(){
		return (
			createPortal(
				this.props.children,//lo que va a renderizar
				document.getElementById('modal-container')//en donde lo hará
			)
		)
	}
}

export default ModalContainer;