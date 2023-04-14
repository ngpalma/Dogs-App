import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import { Home, Form, Detail, Landing } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const onSearch = (name) => {
    axios.get(`http://localhost:3001/dogs?name=${name}`).then((response) => {
      const data = response.data;
      return data;
    });
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/detail/:idRaza" element={<Detail />} />

        <Route exact path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
