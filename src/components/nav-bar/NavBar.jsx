import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="logo-container">
          <img
            className="logo"
            src="/airbnb 1.svg"
            alt="imagem-de-logotipo"
          ></img>
        </div>
      </nav>
    );
  }
}

export default NavBar;
