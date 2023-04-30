// import axios from "axios";
import { Home, Form, Detail, Landing, NavBar } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";
// import { useState } from "react";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div>{location.pathname !== "/" && <NavBar />}</div>

      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:idRaza" element={<Detail />} />

        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
