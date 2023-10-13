import React, { useEffect, useRef, useState } from "react";
import WeatherCard from "./WeatherCard";
import { fetchWeatherAPI, fetchWeatherByLocation } from "../utils/weatherApi";

const SearchForm = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [location, setLocation] = useState("");
  const [hourlyData, setHourlyData] = useState([]);

  const str = useRef();

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const city = str.current.value;
    if (city !== "") {
      const response = await fetchWeatherAPI(city);
      console.log("Response", response);
      const hourlyResponse = await fetchWeatherByLocation(city);
      if (response && hourlyResponse) {
        setCurrentWeather(response.current);
        setLocation(response.location);
        setHourlyData(hourlyResponse?.forecast?.items);
        console.log("HourlyDataResp", hourlyData);
      }
    } else {
      alert("Enter city name ");
    }
  };
  const city = "sydney";
  useEffect(() => {
    (async () => {
      const response = await fetchWeatherAPI(city);
      const hourlyResponse = await fetchWeatherByLocation(city);
      if (response && hourlyResponse) {
        setCurrentWeather(response.current);
        setHourlyData(hourlyResponse?.forecast?.items);
        setLocation(response.location);
      } else {
      }
    })();
  }, []);

  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col text-center color-warning">
            <h1>Weather Forecast</h1>
          </div>

          <hr />
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={handelOnSubmit}>
              <div className="mb-3">
                <input
                  ref={str}
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder="Search city ..."
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <WeatherCard
            currentWeather={currentWeather}
            location={location}
            hourlyData={hourlyData}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
