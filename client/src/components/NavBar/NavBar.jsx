import { SearchBar } from "../index";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <Link to="/home">
        <p>VOLVER AL HOME</p>
      </Link>
      <SearchBar />
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
