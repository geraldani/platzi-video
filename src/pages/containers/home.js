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
        let el = document.getElementById('contenedorModal');
        el.className = "modalContainer modal-close"
    };
    handleOpenModal = (tit, aut) => {
        let el = document.getElementById('contenedorModal');
        el.className = "modalContainer modal-open";
        let info = document.getElementById('reproduciendoInfo');//se obtine el dom donde contiene el titulo que se quiere cambiar
        info.children[0].textContent = tit;//se reemplaza lo que estaba ahi por el titulo del objeto donde se hizo click
        info.children[1].textContent = aut;//igual aqui pero con el autor
    };

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <RelatedLayout/>
                    <Categories handleClick={this.handleOpenModal} categories={this.props.data.categories}/>
                    <ModalContainer>
                        <Modal handleClick={this.handleCloseModal}>
                            <VideoPlayer />
                        </Modal>
                    </ModalContainer>
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;