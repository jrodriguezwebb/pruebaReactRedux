import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';
import MasUno from './MasUno';

class Principal extends Component{
    render(){
        return(
            <div>
                <h1>Hola</h1>
                <h2>{VarPrincipalData.numero}</h2>
                <MasUno />
            </div>
        );
    }
}

export default Principal;