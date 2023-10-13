import React from "react";
import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const HourlyCard = ({ hourlyData, monthName }) => {
  return (
    <>
      {hourlyData.map((item, i) => {
        const rain = () => {
          const rainHour = item?.rainHours;
          if (rainHour === "null") {
            return "no rain";
          } else {
            return rainHour;
          }
        };

        const cloudType = () => {
          const type = item?.weather?.text;
          if (type === "leicht bewölkt") {
            return "slightly cloudy";
          } else if (type === "leichter Regen") {
            return "light rain";
          } else if (type === "bedeckt") {
            return "covered";
          } else if (type === "sonnig") {
            return "sunny";
          } else if (type === "klar") {
            return "clear";
          } else if (type === "wolkig") {
            return "cloudy";
          } else if (type === "Regenschauer") {
            return "rain shower";
          } else {
            return type;
          }
        };
        return (
          <div style={{ display: "flex", flexWrap: "wrap" }} key={item?.date}>
            <Card
              style={{
                width: "18rem",
                marginRight: "1rem",
                borderRadius: "40px",
              }}
              bg="info"
              text="dark"
              className="mb-2"
            >
              <Card.Body>
                <Card.Title>
                  {monthName[item?.date?.slice(5, 7) - 1]},{" "}
                  {item?.date?.slice(8, 10)}-{item?.date.slice(0, 4)}
                </Card.Title>
                <Card.Title>{item?.date?.slice(11, 16)}</Card.Title>
                <CardImg src={item?.weather?.icon} />
                <Card.Text> {cloudType()}</Card.Text>
                <Card.Text>
                  {" "}
                  <strong>{item?.temperature?.avg}&deg; C </strong>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Cloudes Cover Percentage</strong>
                  <table className="table table-info table-striped table-bordered border-primary">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">High</th>
                        <th scope="col">Low</th>
                        <th scope="col">Middle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item?.clouds?.high}</td>
                        <td>{item?.clouds?.low}</td>
                        <td>{item?.clouds?.middle}</td>
                      </tr>
                    </tbody>
                  </table>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default HourlyCard;
