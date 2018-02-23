import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Media extends PureComponent {
	render(){
		return (
			<div className="Media">
				<a href={this.props.src} target="_blank">
					<div className="imageContainer">
						<img className={`Media-cover imagen-${this.props.id}`} src={this.props.cover} alt={"imagen"+this.props.id} />
					</div>
						<h3 className="Media-title">{this.props.title}</h3>
						<p className="Media-author">{this.props.author}</p>
				</a>
			</div>
		)
	}
}
//esta seccion es para validar
Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string
}
export default Media;