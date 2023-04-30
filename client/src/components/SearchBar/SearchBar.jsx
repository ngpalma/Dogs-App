import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { getDogsByName } from "../../redux/actions";

const SearchBar = () => {
  const [dogName, setDogName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setDogName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getDogsByName(dogName));
  };

  const handleClearSearch = () => {
    setDogName("");
    dispatch(getDogsByName(""));
  };
  
  return (
    <div className={style.cssSearch}>
      <input
        type="text"
        placeholder="Escriba el nombre de una raza..."
        value={dogName}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>BUSCAR</button>
      <button onClick={handleClearSearch}>TODOS</button>
    </div>
  );
};

export default SearchBar;
