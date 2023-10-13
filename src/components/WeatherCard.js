import React, { useState } from "react";
import ReactModal from "react-modal";
import ModalCard from "./ModalCard";
import HourlyCard from "./hourCard/HourlyCard";

const WeatherCard = ({ currentWeather, location, hourlyData }) => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const hours = new Date().getHours();
  const minute = new Date().getMinutes();
  const year = new Date().getUTCFullYear();
  const date = new Date().getDate();
  const month = new Date().getUTCMonth();
  const icon = currentWeather?.condition?.icon;
  const text = currentWeather?.condition?.text;
  const feelslike_c = currentWeather?.feelslike_c;
  const temp_c = currentWeather?.temp_c;
  const humidity = currentWeather?.humidity;
  const wind_kph = currentWeather?.wind_kph;
  const wind_dir = currentWeather?.wind_dir;
  const locatTime = location?.localtime;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {" "}
      {isModalOpen && (
        <ReactModal
          isOpen={isModalOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
        >
          <ModalCard
            closeModal={closeModal}
            setIsModalOpen={setIsModalOpen}
            currentWeather={currentWeather}
            location={location}
          />
        </ReactModal>
      )}
      <div className="card" style={{ background: "#AD36CB", color: "white" }}>
        <div className="card-header text-left ">
          <div className="row ">
            <div className="col">
              <span>{location?.name}</span>, {location?.country}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <div className="col">
              {monthName[locatTime?.slice(5, 7) - 1]}, {locatTime?.slice(8, 10)}{" "}
              - {locatTime?.slice(0, 4)}
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col">
              <h1>Today</h1>
              <h3>
                Time: {locatTime?.slice(11, 13)}:{locatTime?.slice(14, 16)}
              </h3>{" "}
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                    {temp_c}&deg; C
                  </span>{" "}
                  &nbsp; &nbsp; &nbsp;
                  <img src={icon} alt="weather " /> <br />
                </div>
              </div>

              <h4> {text}</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              Humidity <br /> {humidity} %
            </div>
            <div className="col">
              Feels_like <br />
              {feelslike_c}&deg; C
            </div>
            <div className="col">
              Wind <br />
              {wind_kph} Km/h
            </div>
            <div className="col">
              Wind Direction <br />
              {wind_dir}
            </div>
          </div>
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <button
              className="btn"
              onClick={openModal}
              style={{ background: "#AD36CB", color: "white" }}
            >
              {" "}
              See more details...{" "}
            </button>
          </div>
        </div>
      </div>
      {hourlyData && (
        <div
          className=""
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            marginTop: "2rem",
            paddingBottom: "2rem",
            background: "#AD36CB",
          }}
        >
          {" "}
          <h2 className="font-weight-light">Hourly Forecast</h2>
          <div
            className="card-container"
            style={{
              textAlign: "center",
              background: "#AD36CB",
            }}
          >
            <div className="card-scrollable" style={{ margin: "1rem" }}>
              <HourlyCard hourlyData={hourlyData} monthName={monthName} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
