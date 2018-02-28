import React from 'react'
import './error.css'//ESTILOS

function RegularError (){
	return(
		<div className="RegularError">
			<div>
				<p>
					Oh, oh ...<br/>
					Algo no salió bien.
				</p>
				<p className = "RegularError-emojis">😓😔😫</p>
				<p>
					Espera algunos segundos<br/>
					y <a href="./">¡Vuelve a intentarlo!</a>
				</p>
			</div>
		</div>
	)
}
export default RegularError;