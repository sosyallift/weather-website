// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Weather from "./screens/Weather";

const App = () => {
  return (
    <Router forceRefresh={true}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/weather/:location">
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
