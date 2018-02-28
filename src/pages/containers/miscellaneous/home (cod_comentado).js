//componente SMART o container
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories.js'
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../modal/containers/modal-container'
import Modal from '../../modal/components/modal'

class Home extends Component{
	state = {//esta forma es una alternativa para iniciar estados, lo normal seria usar el constructor, pero tambien se puede con esta sintexis mas reducida
		modalVisible: false
	}
	/*constructor(props){//forma tradicional de iniciar estados
		super(props)
		this.state = {modalVisible: true}
		//this.handleCloseModal=this.handleCloseModal.bind(this);//esta forma de bindearle el contexto a la funcion se puede hacer directamente afuera del constructor mediante arrow functions
	}*/
	
	handleCloseModal = () => {//como un arrow function, la funcion recuerda el contexto en el que fue creado y no crea uno nuevo
	//handleCloseModal(){
		/*this.setState((prevState) =>{ //forma (1) de cambiar un estado, a traves de una funcion que se recibe por parametro, que normalmente se pone como un arrow function para que esa funcion no cree un nuevo contexto
			return {
				modalVisible: !prevState.modalVisible
			}
		});*/
		// this.setState({//forma (2) de cambiar un estado, al objeto estado se le cambia directamente su valor
		// 	modalVisible: false,
		// 	// modalVisible: !this.state.modalVisible,
		// });
		let el=document.getElementById('contenedorModal')
		el.className="modalContainer modal-close"
	}
	handleOpenModal = ()=>{
		/*this.setState({
			modalVisible: true,
		});*/
		let el=document.getElementById('contenedorModal')
		// let el=document.getElementsByClassName('modalContainer')
		el.className="modalContainer modal-open"
	}

	render(){
		return(
			<HomeLayout>
				<RelatedLayout />{/*Esta es la seccion del contenido relacionado (columna izquierda)*/}
				<Categories handleClick={this.handleOpenModal} categories={this.props.data.categories} /> {/*esta es la parte de donde van las categorias (columna derecha)*/}
				{
					// this.state.modalVisible && //esta forma de condicional es la misma del ternadio (condicion) ? bloque1 : bloque2, la diferencia de este es que no importa el else pues se coloca asi, seria el equivalente a if(condicion) { bloqueUnico }
					// <ModalContainer>{/* Esta es la seecion donde va a ir el modal, donde se reproduce algo */}
					// 	<Modal handleClick={this.handleCloseModal}>{/*el modal como tal, donde va la info y los estilos*/}
					// 		<h1>este si es mi modal</h1>
					// 	</Modal>
					// </ModalContainer>
					<ModalContainer>{/* Esta es la seecion donde va a ir el modal, donde se reproduce algo */}
						<Modal handleClick={this.handleCloseModal} isVisible={this.state.modalVisible}>{/*el modal como tal, donde va la info y los estilos*/}
							<h1>este si es mi modal</h1>
						</Modal>
					</ModalContainer>
				}
			</HomeLayout>
		)
	}
}
export default Home;