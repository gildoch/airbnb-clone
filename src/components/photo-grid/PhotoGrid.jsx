import React, { Component } from "react";
import "./PhotoGrid.css";

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="photo-grid-section">
        <div className="photo-grid-container">
          <div className="photo--grid">
            <img
              className="photo-grid"
              src="/Group 77.svg"
              alt="imagem-de-logotipo"
            ></img>
          </div>

          <div className="photo-grid-banner">
            <h1>Online Experiences</h1>
            <p>
              Join unique interactive activities led by one-of-a-kind hosts—all
              without leaving home.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default PhotoGrid;
