import React, { Component } from 'react';
import './NavBar.css';
import logo from '../assets/airbnb 1.svg';

class NavBar extends Component {
    constructor (props){
        super(props);
    }

    render (){
        return (
            <nav>
                <div className="logo-container">
                <img className="logo" src={logo} alt="imagem-de-logotipo"></img>  
                </div>
            </nav>
        )
    }
}

export default NavBar;