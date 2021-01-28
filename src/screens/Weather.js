//React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//API functions
import { getWeatherApiURL } from "../API";
//CSS
import "./Weather.css";
//Components
import SearchBar from "../components/SearchBar";
import {
  CurrentWeather,
  ForecastWeather,
} from "../components/weather_components";

const Weather = (props) => {
  //States/variables
  //weather object from api
  const [weather, setWeather] = useState(false);
  //state for official Location name
  const [officialLoc, setOfficialLoc] = useState("");
  //state for storing the time that the weather was retrieved
  const [timeUpdated, setTimeUpdated] = useState("");
  //location searched
  const { location } = useParams();
  //Number of days for the forecast
  const numDays = 3;

  //Fetches current weather data and assigns the json response to weather state and updates officialLoc on the 1st render
  useEffect(() => {
    fetch(getWeatherApiURL(location, numDays))
      .then((response) => {
        //TODO handle bad requests
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setWeather(json);
        setOfficialLoc(`${json.location.name}, ${json.location.region}`);
        //sets converts the date to the last updated time and updates the timeUpdated state
        const time = new Date(json.current.last_updated);
        let options = {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZoneName: "short",
        };
        let timeString = time.toLocaleString("en-US", options);
        setTimeUpdated(timeString);
      });
  }, [location, numDays]);

  return (
    <div className="weather">
      <nav className="navbar">
        <div className="weather-SearchBar">
          <SearchBar props={props} />
        </div>
      </nav>
      {/* only renders once weather has been fetched */}
      {weather && (
        <main className="content">
          <div className="currentWeather">
            <CurrentWeather
              weather={weather}
              officialLoc={officialLoc}
              timeUpdated={timeUpdated}
            />
          </div>
          <div className="forecastWeather">
            <ForecastWeather
              weather={weather}
              officialLoc={officialLoc}
              timeUpdated={timeUpdated}
              numDays={numDays}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default Weather;
