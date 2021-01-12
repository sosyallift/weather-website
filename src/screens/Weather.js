//React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//API
import { getWeatherApiURL } from "../API";
//CSS
import "./Weather.css";
//Components
import SearchBar from "../components/SearchBar";

const Weather = (props) => {
  //location searched
  const { location } = useParams();

  return (
    <div className="weather">
      <div className="weather-SearchBar">
        <SearchBar />
      </div>
      {/* <div className="card current-card"> */}
      <CurrentWeather location={location} />
      {/* </div> */}
    </div>
  );
};

const CurrentWeather = (props) => {
  //States
  //weather object from api
  const [weather, setWeather] = useState({});
  //var for official Location name
  const [officialLoc, setOfficialLoc] = useState("");
  //Fetches current weather data and assigns the json response to weather state and updates officialLoc on the 1st render
  useEffect(() => {
    fetch(getWeatherApiURL(props.location))
      .then((response) => response.json())
      .then((json) => {
        setOfficialLoc(`${json.location.name}, ${json.location.region}`);
        setWeather({ ...json.current });
      });
  }, [props.location]);
  return (
    <div className="card current-card">
      <div className="current-header">
        <h2>{officialLoc} Weather</h2>
        <h3>last updated </h3>
      </div>

      <div className="current-info">
        <ul>
          <li> Temp {weather.temp_f} F° </li>
          <li> Feels Like {weather.feelslike_f} F° </li>
          <li> Wind {weather.wind_mph} mph </li>
        </ul>
      </div>
    </div>
  );
};
export default Weather;
