import { useEffect, useState } from "react";
import Search from "../search/Search.js";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  useEffect(() => {
    setLoading(true);
    fetchWeatherData("Indore");
  }, []);

  function handleSearch() {
    setLoading(true);
    fetchWeatherData(search);
  }
  return (
    <div>
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <div>Loading please Wait!</div>
      ) : (
        <div>
          <div className="city-name mb-4">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>

          <div className="temp text-7xl text-black font-bold text-center">
            {weatherData?.main?.temp}
          </div>
          <p className="description text-black text-2xl font-semibold mt-0 mb-8">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info flex justify-evenly items-center mt-4 px-5 text-2xl font-bold text-center">
            <div className="column flex items-center">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
