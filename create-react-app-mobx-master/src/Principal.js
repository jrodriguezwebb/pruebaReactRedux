import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';
import { observer } from 'mobx-react';
import MasUno from './MasUno';
import MenosUno from './MenosUno';

class Principal extends Component{
    render(){
        return(
            <div>
                <h1>Hola</h1>
                <h2>{VarPrincipalData.numero}</h2>
                <MasUno />
                <MenosUno />
            </div>
        );
    }
}

export default observer(Principal);