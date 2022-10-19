
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTemperatureHigh,faLocationDot,faTemperatureLow} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";



function App() {


  const [apiData,setApiData]=useState({});
  const [getState,setGetState]=useState("tamilnadu");
  const [state, setState] = useState('tamilnadu');

  
  const apiKey = "eb1a5ad4cf6dc742dd459a506ed0081d";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=metric`;
  

  //api request using fetch and useEffect Hook.
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);
  

  console.log(state);
  console.log(apiData);

  return (
    <div className="flex items-center flex-col p-10 ">
      <h1 className="text-3xl font-bold p-5 text-center ">React weather app</h1>

      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="font-normal text-gray-600">Enter Location</h2>
        <input
          type="text"
          name="place"
          value={getState}
          onChange={(e) => setGetState(e.target.value)}
          className="mt-3 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter the location"
        />
        <button
          type="button"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-md"
          onClick={() => setState(getState)}
        >
          Get weather
        </button>
      </div>

      <div className="w-full md:w-[65%] flex flex-col border-slate-300 border rounded-md justify-center items-center p-10">
        <div className="flex flex-col  items-center">
        {/* <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            /> */}
            
          <h2 className="font-bold text-sky-700  mb-4 text-5xl ">{apiData.main.temp} °C</h2>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <h2 className="font-normal  ml-3 text-xl text-black mb-6 md:first-line:mb-3">{apiData.name}</h2>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="flex justify-between">
            <div className="flex flex-row  items-center">
              <FontAwesomeIcon icon={faTemperatureLow} size="2x" />
              <h2 className="font-normal  ml-3 text-xl text-black ">{apiData.main.temp_min}</h2>
            </div>
            <div>
              <h2 className="text-xl font-normal ml-5">{apiData.weather[0].description}</h2>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-row  items-center">
              <FontAwesomeIcon icon={faTemperatureHigh} size="2x" />
              <h2 className="font-normal  ml-3 text-xl text-black ">{apiData.main.temp_max}</h2>
            </div>
            <div>
              <h2 className="text-xl font-normal ml-5">{apiData.sys.country}</h2>
            </div>
          </div>

        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
