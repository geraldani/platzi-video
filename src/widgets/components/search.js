import React from 'react'
import "./search.css"

const Search = (props) => (//con las arrowFunctios omito la palabra return
    <div className="search-container">
        <form>
            <input className="search-input" type="text" placeholder="Busca a un artista, tema o amigo" />
        </form>
    </div>
);
export default Search