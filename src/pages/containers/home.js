//componente SMART o container

import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories.js'
import RelatedLayout from '../components/related-layout'
import Modal from '../../widgets/components/modal'
import ModalContainer from '../../widgets/containers/modal-container'
import HandleError from '../../error/containers/handleError'

class Home extends Component{
	handleCloseModal = () => {
		let el=document.getElementById('contenedorModal');
		el.className="modalContainer modal-close"
	};
	handleOpenModal = ()=>{
		let el=document.getElementById('contenedorModal');
		el.className="modalContainer modal-open"
	};
	render(){
		return(
			<HandleError>
				<HomeLayout>
					<RelatedLayout />
					<Categories handleClick={this.handleOpenModal} categories={this.props.data.categories} />
					{
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal} />
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}
export default Home;