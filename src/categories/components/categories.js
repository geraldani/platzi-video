import React from 'react'
import Category from './category.js'
function Categories (props){
	return (
		<div id="categoriaPrincipal">
			{
				props.categories.map((item)=>{
					return (<Category key={item.id} {...item}/>)
				})
			}
		</div>
	)
}
export default Categories