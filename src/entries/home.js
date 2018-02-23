import React from 'react';//importando react, sirve para crear los componentes
import ReactDOM from 'react-dom'; //importando react-dom, sirve para renderizar los componentes
import Home from '../pages/containers/home'
import Playlist from '../playlist/components/playlist'
import data from '../api.json'
import '../../styles/styles.css'//ESTILOS


const container = document.getElementById('home-container');

//lo que se va a renderizar tiene que ser o un elemento de react o un componente de react
ReactDOM.render(<Home data={data} />, container);
//ReactDOM.render(<Playlist data={data.categories[0].playlist} />, container);