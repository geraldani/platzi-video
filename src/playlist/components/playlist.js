import React from 'react'
import Media from './media.js'

function Playlist (props) {//componente funcional
	// const category = props.data.categories
	return(
		<div>
			{
				props.playlistElem.map((elem)=>{
					return ( <Media {...elem} key={elem.id} /> )
				})
			}
		</div>
	)
}

export default Playlist;