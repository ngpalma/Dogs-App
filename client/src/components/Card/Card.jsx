import React from "react";
import style from "./Card.module.css";
// import { Link } from "react-router-dom";

class Card extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={style.cardCss}>
      <img
        className={style.imgCard}
         src={this.props.image}
         alt={`Foto de la raza ${this.props.name}`}
       />
       <h2>
         <a href={"/detail/" + this.props.id}>Raza: {this.props.name}</a>
       </h2>
       <h3>Temperamentos: </h3>
       <h4>{this.props.temperament}</h4>
       <h4>Peso: {this.props.weight}</h4>
     </div>
    )
  }
}



// const Card = (props) => {
//   return (
//     <div className={style.cardCss}>
//       <img
//         className={style.imgCard}
//         src={props.image}
//         alt={`Foto de la raza ${props.name}`}
//       />
//       <h2>
//         <Link to={"/detail/" + props.id}>Raza: {props.name}</Link>
//       </h2>
//       <h3>Temperamentos: </h3>
//       <h4>{props.temperament}</h4>
//       <h4>Peso: {props.weight}</h4>
//     </div>
//   );
// };

export default Card;
