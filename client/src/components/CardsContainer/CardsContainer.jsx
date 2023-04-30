import { Card } from "../index";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const dogs = useSelector((state) => state.dogs);
  const dogsByName = useSelector((state) => state.dogsByName);

  return (
    <div>
      <div className={style.container}>
        {dogsByName.length > 0
          ? dogsByName.map((dog) => {
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
            })
          : dogs.map((dog) => {
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
    </div>
  );
};

export default CardsContainer;
