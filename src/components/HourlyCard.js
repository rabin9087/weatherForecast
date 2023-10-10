import React, { useEffect, useState } from "react";
import { hourlyApi } from "../utils/hourlyApi";

const HourlyCard = ({ str, condition, latLng }) => {
  const [forecastHourly, setForecastHourly] = useState([
  ]);

  const icon = condition?.icon;
  const text = condition?.text;

  if (str !== "") {
    (async () => {
      const response = await hourlyApi(latLng?.lat, latLng?.lng);
      if (response) {
        setForecastHourly(response);
      }
      console.log("ForecastHourly: ", forecastHourly);
    })();
  } else {
    console.log();
  }

  useEffect(() => {
    const lat ="33.86";
    const lng = "151.20";
    (async () => {
      const response = await hourlyApi(lat, lng);
      if (response) {
        setForecastHourly(response);
      }
      console.log("ForecastHourly: ", forecastHourly);
    })();
  }, []);
  return (
    <div className="row  grid  gap-2">
      {forecastHourly.map((hour, i) => {
        return (
          <div className="col" key={i}>
            <div
              class="card"
              style={{
                width: "",
                background: "#AD36CB",
                color: "white",
              }}
            >
              <img
                className="card-img-top"
                src={icon}
                alt=""
                width="100px"
                height="150px"
              />
              <h4 class="card-title text-center">{text}</h4>
              <div class="card-body">
                <h4 class="card-title text-center">{hour}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyCard;
