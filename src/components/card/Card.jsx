import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let badgeText;
    if (this.props.card.openSpots === 0) {
      badgeText = "SOLD OUT";
    } else if (this.props.card.location === "Online") {
      badgeText = "ONLINE";
    }
    return (
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img
          className="card-img-top"
          src={this.props.card.coverImg}
          alt="Imagem"
        />
        <div className="card-body">
          <div className="card-stats">
            <img className="card-star-img" src="" alt="starImg" />
            <span>{this.props.card.stats.rating}</span>
            <span className="gray">({this.props.card.stats.reviewCount})</span>
            <span className="gray">{this.props.card.location}</span>
          </div>
          <p className="card-title">{this.props.card.title}</p>
          <p className="card-price">
            <strong>From ${this.props.card.price}</strong>/ person
          </p>
        </div>
      </div>
    );
  }
}
export default Card;
