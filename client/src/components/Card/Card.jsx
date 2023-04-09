import style from "./Card.module.css"

const Card = (props) => {
  return (
    <div className={style.cardCss}>
      <p>RAZA = {props.name}</p>
      <img className={style.imgCard} src={props.image} alt="Foto de la raza"></img>
    </div>
  );
};

export default Card;
