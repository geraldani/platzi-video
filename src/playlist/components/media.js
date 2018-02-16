import React, {PureComponent} from 'react'
import '../../../styles/media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent {
	render(){
		return (
			<div className="Media">
				<div className="Media-cover">
					<a href={this.props.src} target="_blank">
						<img className="Media-cover" src={this.props.cover} alt="imagen1" width={260} height={160} />
					</a>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
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