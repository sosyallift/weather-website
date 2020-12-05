const OpenWeatherKey = "862e2eafb07551298a3824c37bc4b955";
export const getOpenWeatherURL = (city) => {
  return `api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${OpenWeatherKey}`;
};
const WeatherApiKey = "4a0f94cb989f49e194a225302200212";
export const getWeatherApiURL = (location) => {
  return `http://api.weatherapi.com/v1/current.json?key=${WeatherApiKey}&q=${location}`;
};
