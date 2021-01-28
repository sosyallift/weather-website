import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Weather from "./screens/Weather";

const App = () => {
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/weather/:location">
          <Weather />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
