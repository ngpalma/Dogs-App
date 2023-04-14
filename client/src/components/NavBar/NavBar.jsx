import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <Link to="/home">
        <p>TODAS LAS RAZAS</p>
      </Link>
      <Link to="/form">
        <p>CREAR RAZA</p>
      </Link>
      <Link to="/">
        <p>SALIR</p>
      </Link>
    </div>
  );
};

export default NavBar;
