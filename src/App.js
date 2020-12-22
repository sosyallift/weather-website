import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const App = () => {
  //States
  //location of -1 indicates no location yet
  const [location, setLocation] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);

  //Event Handlers
  //sets the input to the location after the input has been submitted
  const handleLocationSearch = (input, setInput) => (event) => {
    setLocation(input);
    setInput("");
    event.preventDefault();
  };

  return (
    <div className="home">
      <div className="home-SearchBar">
        <SearchBar submitHandler={handleLocationSearch} />
      </div>
    </div>
  );
};

export default App;
