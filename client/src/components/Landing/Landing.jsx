import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={style.landingCss}>
      <h1>DOGS APP</h1>
      <p>
        En esta app encontrarás información sobre todas las razas de tus
        mascotas preferidas, los perros.
      </p>
      <p>Podrás ver el detalle de cada raza haciendo clic en su nombre.</p>
      <p>
        También ordenarlos de manera ascendente y descendente, tanto por nombre
        como por peso.
      </p>
      <p>
        Si deseas buscar una en particular, escribe su nombre en la barra de
        búsqueda.
      </p>
      <p>
        Si la raza que buscas no la encuentras o no existe, puedes crear una
        nueva.
      </p>
      <p>Que disfrutes navegando entre estos maravillosos animalitos.</p>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        INGRESAR
      </button>
    </div>
  );
};

export default Landing;
