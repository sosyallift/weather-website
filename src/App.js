import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";

const App = () => {
  //States
  //location of -1 indicates no location yet
  const [location, setLocation] = useState(-1);

  //Event Handlers
  //sets the input to the location after the input has been submitted
  const handleLocationSearch = (input, setInput) => (event) => {
    setLocation(input);
    setInput("");
    event.preventDefault();
  };

  return (
    <div id="App">
      <HomeScreen submitHandler={handleLocationSearch} />
    </div>
  );
};

export default App;
