import React, {Component} from 'react'
import Media from './media.js'

class Playlist extends Component {
	render(){
		const category = this.props.data.categories
		return(
			<div>
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
}

export default Playlist;

/*<Media 
title={elem.title}
author={elem.author}
image={elem.cover}
key={elem.id}
/>//esta forma es engorrosa porque suponiendo que tengamos muuuchos atributos hay q llamar a 
cada uno individualmente, por lo que es mucho mas facil hacerlo con la siguiente sintaxis (la de abajo)*/