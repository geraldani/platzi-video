//componente SMART o container

import React, {Component} from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories.js'
import RelatedLayout from '../components/related-layout'
import Modal from '../../widgets/components/modal'
import ModalContainer from '../../widgets/containers/modal-container'
import HandleError from '../../error/containers/handleError'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
    handleCloseModal = () => {
        this.modalContainer.className = "modalContainer modal-close"
    };
    handleOpenModal = (tit, aut) => {
        this.modalContainer.className = "modalContainer modal-open";
        this.infoTit.children[0].textContent = tit;//se reemplaza lo que estaba ahi por el titulo del objeto donde se hizo click
        this.infoTit.children[1].textContent = aut;//igual aqui pero con el autor
    };

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <RelatedLayout/>
                    <Categories handleClick={this.handleOpenModal} categories={this.props.data.categories} />
                    <ModalContainer>
                        <Modal
                            handleClick={this.handleCloseModal}
                            titRef={ el => this.infoTit = el }
                            modalContainer={ el => this.modalContainer = el}>
                            <VideoPlayer autoplay={false} />
                        </Modal>
                    </ModalContainer>
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;