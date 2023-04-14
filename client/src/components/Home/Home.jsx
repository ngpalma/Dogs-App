import { CardsContainer } from "../index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.divCss}>
      <h1>Estoy en la vista de Home</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
