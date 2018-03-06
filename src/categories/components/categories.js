import React from 'react'
import Category from './category.js'
import SearchContainer from '../../widgets/containers/search-container'

import './category.css'
function Categories (props){
	return (
		<section className="seccion-media" id="categoriaPrincipal">
			<SearchContainer />
			<div className="container-categories">
			{
				props.categories.map((item)=>{
					return (<Category key={item.id} {...item} handleClick={props.handleClick}/>)
				})
			}
			</div>
		</section>
	)
}
export default Categories