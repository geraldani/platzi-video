import React from 'react';//importando react, sirve para crear los componentes
import ReactDOM from 'react-dom'; //importando react-dom, sirve para renderizar los componentes
import Home from '../pages/containers/home'

// import Playlist from './src/playlist/components/playlist'
// import data from './src/api.json'

const container = document.getElementById('app');

ReactDOM.render(<Home />, container);//lo que se va a renderizar tiene que ser o un elemento de react o un componente de react