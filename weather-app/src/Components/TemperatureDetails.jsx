import React from "react";
import {
  Sunset,
  Sunrise,
  Thermometer,
  ArrowDownRightSquare,
  ArrowUpRightSquare,
  Moisture,
  Wind,
} from "react-bootstrap-icons";

import { Container, Row, Col } from "react-bootstrap";
import { iconUrlFromCode, formatToLocalTime } from "../Service/Weather";

function TemperatureDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <Container>
      <Row>
      
          <div className="d-flex justify-content-center py-6">
            <p>{details}</p>
          </div>
     

        {/* ------------------------------------ SEZIONE CENTRALE ------------------------------------*/}
        

        <Col className="d.flex flex-row  p-3">

          <Col className="d-flex align-items-center">
            <Col className="d-flexs ">
              <img src={iconUrlFromCode(icon)} alt="icon_weather" />{" "}
            </Col>

            <Col className="d-flex y-2">
              <div className="flex font-light text-sm display-5">
                <div className="align-items-center">
                  <p className="text-5xl">{`${temp}°`}</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="d-flex flex-col my-2 h6">
                <Thermometer className="me-2" size={20} />
                <p>
                  Real Fell: <span>{`${feels_like}°`}</span>
                </p>
              </div>

              <div className="d-flex flex-col my-2 h6">
                <Moisture className="me-2" size={20} />
                <p>
                  Humidity: <span>{`${humidity}%`}</span>
                </p>
              </div>

              <div className="d-flex flex-col my-2 h6">
                <Wind className="me-2" size={20} />
                <p>
                  Wind: <span>{`${speed}km/h`}</span>
                </p>
              </div>
            </Col>
          </Col >

        </Col>

        {/* -------------------------------------------------------------------------------------*/}

        <Col>
          <div className="d-flex align-items-center justify-content-center flex-col space-y-2">
            <div className="d-flex align-items-center justify-content-center my-2">
              <Sunrise className="me-1" size={20} />
              <p className="h6 me-2">
                Rise:{" "}
                <span className="font-weight-bolder">
                  {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                </span>
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center my-2">
              <Sunset className="mx-1" size={20} />
              <p className="h6 me-2">
                Set:{" "}
                <span className="font-weight-bolder">
                  {formatToLocalTime(sunset, timezone, "hh:mm a")}
                </span>
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center my-2">
              <ArrowDownRightSquare className="mx-1" size={20} />
              <p className="h6 me-2">
                High: <span>{`${temp_max}°`}</span>
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center my-2">
              <ArrowUpRightSquare className="me-1" size={20} />
              <p className="h6 me-2">
                Low: <span>{`${temp_min}°`}</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TemperatureDetails;
