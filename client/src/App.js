import { NavBar } from "./components";
import { Home, Form, Detail, Landing } from "./views";
import { Route, useLocation } from "react-router-dom";

function App() {
  // useLocation es un objeto que te dice en que ruta estas parado y la guarda en la propiedad pathname
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/" render={() => <Landing />} />

      <Route path="/home" render={() => <Home />} />

      <Route path="/detail" render={() => <Detail />} />

      <Route path="/form" render={() => <Form />} />
    </div>
  );
}

export default App;
