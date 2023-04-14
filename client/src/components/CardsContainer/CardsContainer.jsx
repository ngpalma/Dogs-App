import { Card } from "../index";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const dogs = useSelector((state) => state.dogs);

  return (
    <div className={style.container}>
      {dogs.map((dog) => {
        return (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            temperament={dog.temperament}
            weight={dog.weight}
            height={dog.height}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
