import React, { Component } from 'react';
import './PhotoGrid.css';
import Group from '../assets/Group 77.svg';

class PhotoGrid extends Component {
    constructor (props){
        super(props);
    }

    render (){
        return (
            <div className="photo-grid-container">
                <div className="photo--grid">
                    <img className="photo-grid" src={Group} alt="imagem-de-logotipo"></img>
                </div>

                <div>
                <h1 className="col-md-8">Online Experiences</h1>
                <h5 className="col-md-8">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </h5>
                </div> 
            </div>
        )
    }
}

export default PhotoGrid;