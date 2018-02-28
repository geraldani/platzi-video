import React from 'react'
import Media from './media.js'

function Playlist (props) {//componente funcional
	// const category = props.data.categories
	return(
		<div className="containerMedia">
			{
				props.playlistElem.map((elem)=>{
					return ( <Media {...elem} key={elem.id} handleClick={props.handleClick}/> )
				})
			}
		</div>
	)
}

export default Playlist;