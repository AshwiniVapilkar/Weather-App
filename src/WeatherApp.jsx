import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    let [weatherData, setWeatherData] = useState({
    city: "Mumbai",
    feelsLike: 34.19,
    humidity: 80,
    temp: 28.8,
    tempMin: 28.8,
    tempMax: 28.8,
    weather: "broken clouds",
    });
    let updateInfo = (newInfo) =>{
        setWeatherData(newInfo);
    }
  return (
    <>
      <div className="container-av">
        <h1 className="text-center heading-av">Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox weatherInfo={weatherData}/>
      </div>
    </>
  );
}
