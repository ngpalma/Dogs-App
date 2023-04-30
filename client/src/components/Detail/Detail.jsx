import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { idRaza } = useParams();
  const [dog, setDog] = useState({
    id: "",
    image: "",
    name: "",
    weight: "",
    height: "",
    temperament: "",
    life_span: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/dogs/${idRaza}`).then((response) => {
      const dog = response.data;
      setDog(dog);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.detailCss}>
      <div>
        <h1>Raza: {dog.name}</h1>
        <h2>Id: {dog.id}</h2>
        <h3>Altura: {dog.height}</h3>
        <h3>Peso: {dog.weight}</h3>
        <h3>Temperamentos: {dog.temperament}</h3>
        <h3>Años de vida: {dog.life_span}</h3>
      </div>
      <div>
        <img src={dog.image} alt={dog.name} />
      </div>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Volver al Home
      </button>
    </div>
  );
};

export default Detail;
