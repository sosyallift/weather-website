import { useState } from "react";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
//CSS
import "./weather_components.css";

//Component for the current weather
export const CurrentWeather = ({ weather, officialLoc, timeUpdated }) => {
  return (
    <div className="card current-card">
      {/* HEADER FOR THE CARD */}
      <div className="current-header">
        <h2>{officialLoc} Weather</h2>
        <p>last updated {timeUpdated} </p>
      </div>
      {/* BODY FOR THE CARD */}
      <div className="current-info">
        {/* Container for only the main weather temperature */}
        <div className="main-info">
          <p className="temp-info">{Math.round(weather.current.temp_f)} F°</p>
        </div>
        {/* Container for secondary information */}
        <div className="other-info">
          <p>Feels Like: {Math.round(weather.current.feelslike_f)}°</p>
          <p>Wind: {Math.round(weather.current.wind_mph)} mph</p>
          <p>Humidity: {Math.round(weather.current.humidity)}%</p>
        </div>
        {/* Container for weather condition and icon) */}
        <div className="current-condition">
          <img src={weather.current.condition.icon} alt="" />
          <p>{weather.current.condition.text}</p>
        </div>
      </div>
    </div>
  );
};
//Component for the forecast
export const ForecastWeather = ({ weather, officialLoc, numDays }) => {
  //forecast = [{day1}, {day2}, ...]
  const [forecast, setForecast] = useState(weather.forecast.forecastday);
  
  // TODO
  // const handleDayClick = (e) => {
  //   setDayPicked(e.target.getAttribute("key"));
  // };

  return (
    <div className="card forecast-card">
      {/* HEADER FOR THE CARD */}
      <div className="forecast-header">
        <h2>{numDays} Day Forecast</h2>
        <p> - {officialLoc} </p>
      </div>
      {/* BODY FOR THE CARD */}
      <div className="forecast-info">
        <ul>
          {forecast.map((forecastday) => {
            return (
              <li className="forecast-day" key={forecastday.date}>
                <p>
                  {" "}
                  {`${getDayOfWeek(forecastday.date)} ${formatDate(
                    forecastday.date
                  )}`}{" "}
                </p>
                <p className="forecast-highlow">
                  <b>{Math.round(forecastday.day.maxtemp_f)}</b>° /{" "}
                  {Math.round(forecastday.day.mintemp_f)}°
                </p>
                <img
                  className="forecast-icon forecast-condition"
                  src={forecastday.day.condition.icon}
                  alt=""
                />
                <p className="forecast-condition">
                  {" "}
                  {forecastday.day.condition.text}{" "}
                </p>
                <span className="forecast-rain">
                  <FontAwesomeIcon color="#202547" icon={faUmbrella} />
                  <p>{forecastday.day.daily_chance_of_rain}%</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
//TODO
//Component for the selcted day
// export const DayWeather = ({ weather, date }) => {
//   const [forecast, setforecast] = useState("");

//   useEffect(() => {}, []);

//   return <div className="card day-card">{date}</div>;
// };

//Helper functions
const formatDate = (date) => {
  //date is a string formatted like: "YYYY-MM-DD" initially
  if (date[5] === "0") {
    return date.substring(6, 7) + "/" + date.substring(8);
  } else {
    return date.substring(5, 7) + "/" + date.substring(8);
  }
};
const getDayOfWeek = (date) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObj = new Date(date);
  return weekdays[dateObj.getUTCDay()];
};
