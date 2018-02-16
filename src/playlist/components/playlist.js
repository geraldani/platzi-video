import React from 'react'
import Media from './media.js'
import Play from '../../icons/components/play'
import Volume from '../../icons/components/volume'
import Fullscreen from '../../icons/components/fullscreen'
import Pause from '../../icons/components/pause'

function Playlist (props) {//componente funcional
	const category = props.data.categories
	return(
		<div>
			{/*<Play size={25} color="red" />
			<Volume size={85} color="magenta" />
			<Pause size={105} color="blue" />
			<Fullscreen size={125} color="cian" />*/}
		{
			category.map((item)=>{
				return(
					<div key={item.id}>
						<h2>{item.description}</h2>
						<h1>{item.title}</h1>
						{
							item.playlist.map((elem)=>{
								return (<Media {...elem} key={elem.id} />)
							})
						}
					</div>
				)
			})
		}
		</div>
	)
}

export default Playlist;
