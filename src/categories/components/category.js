import React from 'react'
import Playlist from '../../playlist/components/playlist.js'

function Category (props){
	return (
		<div>
			<p>{props.description}</p>
			<h2>{props.title}</h2>
			{
				props.playlist.map((item)=>{
					<Playlist {...item} />
				})
			}
		</div>
	)
}
export default Category