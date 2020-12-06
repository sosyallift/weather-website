import { useState, useEffect, useRef } from "react";
import "./weather-screens.css";
import { getWeatherApiURL } from "../API";

//Component
const CurrentWeather = (props) => {
  //States
  //updatedLoc of -1 indicates no new location yet
  const [updatedLoc, setUpdatedLoc] = useState(-1);
  const [weather, setWeather] = useState({});
  //Fetch current weather data and assigns the json response to weather state
  const getCurrentWeather = () => {
    fetch(getWeatherApiURL(props.location))
      .then((response) => response.json())
      .then((json) => {
        //setUpdatedLoc(`${json.location.name}, ${json.location.region} `);
        setWeather({ ...json.current });
      });
  };
  //Updates weather after a location has been searched
  //After location has been searched by weather api, updates location to official name
  useEffect(() => {
    if (props.location !== -1) getCurrentWeather(props.location);
    //if (updatedLoc !== -1) props.setLocation(updatedLoc);
  }, [props.location, updatedLoc]);

  return (
    <div className="CurrentWeather">
      <h2>{props.location === -1 ? "" : `Weather for ${props.location}`}</h2>
      <ul className="weather">
        {props.location === -1 ? (
          ""
        ) : (
          <>
            <li> Temp {weather.temp_f} F° </li>
            <li> Feels Like {weather.feelslike_f} F° </li>
            <li> Wind {weather.wind_mph} mph </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CurrentWeather;
