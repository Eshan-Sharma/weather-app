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
        console.log(data);
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
      {loading ? <div>Loading please Wait!</div> : null}
    </div>
  );
}
