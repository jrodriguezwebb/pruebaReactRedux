import React, { Component } from 'react';
import Segundo from './Segundo';

class Principal extends Component{
    render(){
        return(
            <div>
                <h2>Hola desde Component</h2>
                <Segundo/>
            </div>            
        );
    }
}

export default Principal;