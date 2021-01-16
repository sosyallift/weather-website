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
          <p className="temp-info">
            {weather !== 0 ? Math.round(weather.current.temp_f) : ""} F°
          </p>
          {/* Container for secondary information */}
          <div className="other-info">
            <p>
              Feels Like: {weather !== 0 ? weather.current.feelslike_f : ""} F°
            </p>
            <p>Wind: {weather !== 0 ? weather.current.wind_mph : ""} mph</p>
            <p>Humidity: {weather !== 0 ? weather.current.humidity : ""}%</p>
          </div>
        </div>
        {/* Container for weather condition and icon) */}
        <div className="current-condition">
          <img
            src={weather !== 0 ? weather.current.condition.icon : ""}
            alt=""
          />
          <p>{weather !== 0 ? weather.current.condition.text : ""}</p>
        </div>
      </div>
    </div>
  );
};
//Component for the forcast
// export const ForcastWeather = ({ weather, officialLoc, timeUpdated }) => {
//   // const [forecast, setForcast] = useState(weather.forecast.)

//   return <div className="card">forcast</div>;
// };
