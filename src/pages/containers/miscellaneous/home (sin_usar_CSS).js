//componente SMART o container
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories.js'
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../modal/containers/modal-container'
import Modal from '../../modal/components/modal'

class Home extends Component{
	state = {
		modalVisible: false
	}
	
	handleCloseModal = () => {
		this.setState({
			modalVisible: false,
		});
	}

	handleOpenModal = ()=>{
		this.setState({
			modalVisible: true,
		});
	}

	render(){
		return(
			<HomeLayout>
				<RelatedLayout />
				<Categories handleClick={this.handleOpenModal} categories={this.props.data.categories} />
				{
					this.state.modalVisible && 
					<ModalContainer>
						<Modal handleClick={this.handleCloseModal}>
							<h1>este si es mi modal</h1>
						</Modal>
					</ModalContainer>
				}
			</HomeLayout>
		)
	}
}
export default Home;