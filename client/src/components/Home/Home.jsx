import { CardsContainer } from "../index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, orderByName, orderByWeight } from "../../redux/actions";
import style from "./Home.module.css";
import { useRef } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const order = useRef(null);

  useEffect(() => {
    dispatch(getDogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dogsByName = useSelector((state) => state.dogsByName);

  return (
    <div className={style.divCss}>
      <div>
        <select
          ref={order}
          name="orderByName"
          onChange={(e) => dispatch(orderByName(e.target.value))}
        >
          {["Nombre Ascendente", "Nombre Descendente"].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        <select
          ref={order}
          name="orderByWeight"
          onChange={(e) => dispatch(orderByWeight(e.target.value))}
        >
          {["Peso Menor", "Peso Mayor"].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <CardsContainer dogs={dogsByName.length > 0 ? dogsByName : undefined} />
    </div>
  );
};

export default Home;
