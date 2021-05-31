//React
import { useState, useEffect } from "react";
//API functions
import { getWeatherApiURL } from "../API";
//CSS
import "./Weather.css";
//Components
import { CurrentWeather, ForecastWeather } from "./weather_components";

const Weather = ({ location }) => {
  //States/variables
  //weather object from api
  const [weather, setWeather] = useState(false);
  //state for weather the searched location exists
  const [locExists, setLocExists] = useState(true);
  //state for official Location name
  const [officialLoc, setOfficialLoc] = useState("");
  //state for storing the time that the weather was retrieved
  const [timeUpdated, setTimeUpdated] = useState("");
  //Number of days for the forecast
  const numDays = 3;

  //Fetches current weather data and assigns the json response to weather state and updates officialLoc on the 1st render
  useEffect(() => {
    if (location === "") {
      return;
    }
    fetch(getWeatherApiURL(location, numDays))
      .then((response) => {
        if (!response.ok) {
          setLocExists(false);
          setWeather(false);
          throw new Error("Location searched is not found");
        }
        return response.json();
      })
      .then((json) => {
        setLocExists(true);
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
      })
      .catch((error) => console.log(error));
  }, [location, numDays]);

  if (locExists) {
    return (
      <div className="weather">
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
  } else {
    return <div className="error"> Location Not Found :( </div>;
  }
};

export default Weather;
