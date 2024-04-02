import { useState } from "react";

export default function Search() {
  const [cityName, setCityName] = useState("");
  function handleClick() {}
  //   function handleCityInput(e) {}
  return (
    <div>
      <input
        onChange={(e) => setCityName(e.target.value)}
        value={cityName}
        placeholder="Enter City"
        type="text"
      ></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
