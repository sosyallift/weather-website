import { useState } from "react";
import "./App.css";
import SearchBar from "./components/search_bar/SearchBar";
import CurrentWeather from "./weather screens/CurrentWeather";

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
      <SearchBar submitHandler={handleLocationSearch} />
      <CurrentWeather location={location} setLocation={setLocation} />
    </div>
  );
};

export default App;
