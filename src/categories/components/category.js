import React from 'react'
import Playlist from '../../playlist/components/playlist.js'

function Category (props){
	return (
		<div id={'categoria'+props.id}>
			<p>{props.description}</p>
			<h2>{props.title}</h2>
			{
				<Playlist playlistElem={props.playlist} />
			}
		</div>
	)
}
export default Category