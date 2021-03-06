import React from 'react'

function Icon(props){
	/*const {
		color,
		size
	} = props;*/
	return(
		<svg 
			viewBox="0 0 32 32" 
			height={props.size}
			width={props.size}
			fill={props.color}
		>
			{props.children}
		</svg>
	)
}
export default Icon;