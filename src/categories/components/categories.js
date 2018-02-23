import React from 'react'
import Category from './category.js'
function Categories (props){
	return (
		<section className="seccion-media" id="categoriaPrincipal">
			<div className="container-categories">
			{
				props.categories.map((item)=>{
					return (<Category key={item.id} {...item}/>)
				})
			}
			</div>
		</section>
	)
}
export default Categories