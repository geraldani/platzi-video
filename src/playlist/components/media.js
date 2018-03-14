import React from 'react'
import PropTypes from 'prop-types'
import './playlist.css'

function Media (props) {
	return (
		<div className="Media" onClick={() => props.handleClick(props.title,props.author)}>
			{/*<a href={propiedades.src} target="_blank">*/}
				<div className="imageContainer">
					<img className={`Media-cover imagen-${props.id}`} src={props.cover} alt={"imagen"+props.id} />
				</div>
				<h3 className="Media-title">{props.title}</h3>
				<p className="Media-author">{props.author}</p>
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