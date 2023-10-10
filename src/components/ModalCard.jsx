import React from "react";

const ModalCard = ({
  closeModal,
  currentWeather,
  location,
  setIsModalOpen,
}) => {
  console.log("ModalData", currentWeather);
  return (
    <div style={{ background: "yellow" }}>
      <h1
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "bold",
          textDecoration: "underline",
          paddingTop: "15px",
        }}
      >
        <span>{location?.name}</span>, {location?.country}
      </h1>
      <div
        className="row"
        style={{
          display: "block",
          textAlign: "left",
          paddingLeft: "10px",
          fontSize: "20px",
        }}
      >
        <div className="col">
          <strong>last_updated</strong> : {currentWeather?.last_updated}
        </div>
        <div className="col">
          <strong>cloud</strong> : {currentWeather?.cloud}
        </div>
        <div className="col">
          <strong>temp_f</strong> : {currentWeather?.temp_f}
        </div>
        <div className="col">
          <strong>wind_degree</strong> : {currentWeather?.wind_degree}
        </div>
        <div className="col">
          <strong>precip_in</strong> : {currentWeather?.precip_in}
        </div>
        <div className="col">
          <strong>pressure_in</strong> : {currentWeather?.pressure_in}
        </div>
        <div className="col">
          <strong>uv</strong> : {currentWeather?.uv}
        </div>
        <div className="col">
          <strong>vis_km</strong> : {currentWeather?.vis_km}
        </div>
        <div className="col">
          <strong>vis_miles</strong> : {currentWeather?.vis_miles}
        </div>
        <div className="col">
          <strong>feelslike_f</strong> : {currentWeather?.feelslike_f}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "20px" }}>
        <button className="btn btn-danger" onClick={closeModal}>
          Close!
        </button>
      </div>
    </div>
  );
};

export default ModalCard;
