import React from 'react'
import "./styles/search.css"

function Search (props) {
    return(
        <div className="search-container">
            <form onSubmit={props.handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Busca a un artista, tema o amigo"
                    name="search"
                    ref={props.setRef}
                    // defaultValue="Luis Fonsi"
                    value={props.value}
                    onChange={props.handleChange}
                />
            </form>
        </div>
    )
}

/*const Search = (props) => (//con las arrowFunctios omito la palabra return (pero hay que encerrarlo dentro de un parentesis)
    <div className="search-container">
        <form onSubmit={props.handleSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Busca a un artista, tema o amigo"
                name="search"
                ref={props.setRef}
            />
        </form>
    </div>
);*/
export default Search