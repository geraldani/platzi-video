//componente SMART o container
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories.js'
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../modal/containers/modal-container'
import Modal from '../../modal/components/modal'

class Home extends Component{
	/*constructor(props){
		super(props)
		this.state = {isToggleOn: true}
		this.handleCloseModal=this.handleCloseModal.bind(this);
	}
*/
	handleCloseModal(evento){
	/*	this.setState((prevState) => (
			{isToggleOn: !prevState.isToggleOn}
		));*/
		this.setState({
			isToggleOn: !this.state.isToggleOn
		});
	}
	render(){
		//console.log(this.props.data)
		return(
			<HomeLayout>
				<RelatedLayout />{/*Esta es la seccion del contenido relacionado (columna izquierda)*/}
				<Categories categories={this.props.data.categories} /> {/*esta es la parte de donde van las categorias (columna derecha)*/}
				<ModalContainer>{/* Esta es la seecion donde va a ir el modal, donde se reproduce algo */}
					<Modal handleClick={this.handleCloseModal} isToggleOn={this.state.isToggleOn}>{/*el modal como tal, donde va la info y los estilos*/}
						<h1>este si es mi modal</h1>
					</Modal>
				</ModalContainer>
			</HomeLayout>
		)
	}
}
export default Home;