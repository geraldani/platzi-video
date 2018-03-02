import React from 'react'
import Playlist from '../../playlist/components/playlist.js'

function Category (props){
	return (
		<div id={'categoria-'+props.id} className="containerCategory">
			<p>{props.description}</p>
			<h2>{props.title}</h2>
			<Playlist playlistElem={props.playlist} handleClick={props.handleClick} />
		</div>
	)
}
export default Category