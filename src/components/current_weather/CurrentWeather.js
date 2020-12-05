import React, { useState, useEffect } from "react";
//CSS
import "./CurrentWeather.css";
//WeatherAPI
import { getWeatherApiURL } from "../../API";

//Component
const CurrentWeather = () => {
  //States
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  //Fetch current weather data and assigns the json response to weather state
  const getCurrentWeather = async (pos) => {
    const response = await fetch(getWeatherApiURL(pos));
    const json = await response.json();
    setWeather(json);
  };
  useEffect(() => {
    if (location !== "") {
      getCurrentWeather(location);
    }
  }, [location]);
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
      <form onSubmit={handleInputSubmit}>
        <label>Please enter your location:</label>
        <input value={input} onChange={handleInputChange}></input>
        <button type="submit">Get Weather</button>
      </form>
      <h3>Weather for {location}</h3>
      <h4>Weather Data</h4>
    </div>
  );
};

export default CurrentWeather;
