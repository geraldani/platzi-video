import React, {Component} from 'react'
import Search from '../components/search'

class SearchContainer extends Component{
    state = {
        valorInput: "Luis Fonsi"
    };
    handleSubmit = event =>{
        event.preventDefault();
    };

    handleInputChange = (evento) => {
        this.setState({
            valorInput: this.inputElement.value.replace(' ','-')//transforma la cadena introducida, quitandole los espacios en blanco y poniendole guion
        });
    };
    setInputRef = (elementoHTML) =>{//esta funcion se puede llamar como sea, no es especifica al framework
      this.inputElement = elementoHTML;//el elemento html es el elemento del dom al que se hace referecnia en el componente hijo
    };
    render(){
        return(
            <Search
                handleSubmit={this.handleSubmit}
                setRef={ elementoHTML => this.inputElement = elementoHTML}
                // setRef={this.setInputRef}
                handleChange={this.handleInputChange}
                value={this.state.valorInput}
            />
        )
    }
}
export default SearchContainer;