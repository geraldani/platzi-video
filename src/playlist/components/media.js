import React from 'react'
import PropTypes from 'prop-types'
import './playlist.css'

function Media (propiedades) {
	return (
		<div className="Media" onClick={()=>propiedades.handleClick(propiedades.title,propiedades.author)}>
			{/*<a href={propiedades.src} target="_blank">*/}
				<div className="imageContainer">
					<img className={`Media-cover imagen-${propiedades.id}`} src={propiedades.cover} alt={"imagen"+propiedades.id} />
				</div>
				<h3 className="Media-title">{propiedades.title}</h3>
				<p className="Media-author">{propiedades.author}</p>
			{/*</a>*/}
		</div>
	)
}
//esta seccion es para validar
Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string
};
export default Media;