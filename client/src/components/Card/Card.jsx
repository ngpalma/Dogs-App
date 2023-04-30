import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.cardCss}>
        <Link to={`/detail/${this.props.id}`}>
          <h2>{this.props.name}</h2>
        </Link>
        <img
          className={style.imgCard}
          src={this.props.image}
          alt={`Foto de la raza ${this.props.name}`}
        />
        <h4>Peso: {this.props.weight}</h4>
        <h4>Temperamento: </h4>
        <h4>{this.props.temperament}</h4>
      </div>
    );
  }
}

export default Card;
