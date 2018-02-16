import React from 'react'

function Categories (props){
	return (
		<div>
			{
				props.categories.map((item)=>{
					<Category />
				})
			}
		</div>
	)
}
export default Categories