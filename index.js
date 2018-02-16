import React from 'react';//importando react, sirve para crear los componentes
import ReactDOM from 'react-dom'; //importando react-dom, sirve para renderizar los componentes

import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'

const container = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo haré);
ReactDOM.render(<Playlist data={data} />, container);//lo que se va a renderizar tiene que ser o un elemento de react o un componente de react