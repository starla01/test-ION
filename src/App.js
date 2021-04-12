// Librerias
import { Switch, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import Disposition from "./views/Disposition";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/disposition" children={<Disposition />} />
      </Switch>
    </div>
  );
}

export default App;
