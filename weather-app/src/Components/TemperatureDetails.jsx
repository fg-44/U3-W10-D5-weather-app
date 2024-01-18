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

import { iconUrlFromCode, formatToLocalTime } from "../Service/Weather";

function TemperatureDetails({
  weather: {
    details,
    icons,
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
    <div className="container">
      <div className="row">
        <div className="d-flex items-center justify-center py-6">
          <p>{details}</p>
        </div>
      </div>

      {/* ------------------------------------ SEZIONE CENTRALE ------------------------------------*/}

      <div className="row">
        <div className="d-flex flex-row align-items-center justify-content-between p-3">
          <div className="d-flex flex-row align-items-center">
            <img src={iconUrlFromCode(icons)} alt="icon_weather" />{" "}
          </div>

          <div className="d-flex flex-col y-2">
            <div className="flex font-light text-sm align-items-center display-5">
              <div className="align-items-center">
                <p className="text-5xl">{`${temp}°`}</p>
              </div>
            </div>
          </div>

          <div>
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
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------*/}

      <div className="row">
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
      </div>
    </div>
  );
}

export default TemperatureDetails;
