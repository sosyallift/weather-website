import React, { useState, useEffect } from "react";
import getWeatherApiURL from "../../API";
import "./SearchBar.css";

const SearchBar = () => {
  //States
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");

  //updates the input const
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  //sets the input to the location after the input has been submitted
  const handleInputSubmit = (event) => {
    setLocation(input);
    setInput("");
  };
  return (
    <div>
      <form className="SearchBar" onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Please enter your location"
          onChange={handleInputChange}
        ></input>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default SearchBar;
