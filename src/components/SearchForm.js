import React, { useEffect, useRef, useState } from "react";
import WeatherCard from "./WeatherCard";
import { fetchWeatherAPI } from "../utils/weatherApi";
import { fromAddress } from "react-geocode";

import HourlyCard from "./HourlyCard";

const SearchForm = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [location, setLocation] = useState("");
  const [latLng, setLatLng] = useState({
    lat: "",
    lng: "",
  });
  const str = useRef();

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const city = str.current.value;
    if (city !== "") {
      const response = await fetchWeatherAPI(city);

      if (response) {
        console.log("currentWeather", response);
        setCurrentWeather(response.current);
        setLocation(response.location);

        fromAddress(city)
          .then(({ results }) => {
            const { lat, lng } = results[0].geometry.location;
            console.log(lat, lng);
            setLatLng({ lat: lat, lng: lng });
          })
          .catch(console.error);
      } else {
        alert("Search for different city");
        str.current.value = "";
      }
    } else {
      alert("Enter city name ");
    }
  };
  const city = "sydney";
  useEffect(() => {
    (async () => {
      const response = await fetchWeatherAPI(city);
      if (response) {
        setCurrentWeather(response.current);
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
          <WeatherCard currentWeather={currentWeather} location={location} />
        </div>
        <div className="row">
          <div className="col">
            <HourlyCard condition={currentWeather?.condition} latLng={latLng} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
