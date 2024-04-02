import { useState } from "react";

export default function Search({ search, setSearch }) {
  const [cityName, setCityName] = useState("");
  function handleClick() {}
  //   function handleCityInput(e) {}
  return (
    <div className="w-full flex justify-center items-center mb-8 mt-2">
      <input
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter City"
        type="text"
        name="search"
        value={search}
        className="w-70 h-11 border-2 border-black rounded-lg px-3 text-lg outline-none bg-white text-gray-700 "
      ></input>
      <button
        className="border-none rounded-lg bg-black text-white text-xl outline-none cursor-pointer px-4 py-2"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
