import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const dogs = useSelector((state) => state.dogs);

  return (
    <div className={style.container}>
      {dogs.map((dog) => {
        return <Card id={dog.id} name={dog.name} image={dog.image.url} />;
      })}
    </div>
  );
};

export default CardsContainer;
