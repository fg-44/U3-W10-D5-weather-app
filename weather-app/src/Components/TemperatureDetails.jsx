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
          <div className="d-flex flex-row align-items-center justify-content-between py-3">
            <img src={iconUrlFromCode(icons)} alt="icon_weather " />{" "}
            <Sunset size={20} />
            <p className="text-5xl">{`${temp.tofixed()}°`}</p>
          </div>

          <div className="d-flex flex-col my-2">
            <div className="flex font-light text-sm align-items-center justify-content-center"></div>
          </div>

          <div>
            <div className="d-flex flex-col my-2">
              <Thermometer size={20} />
              <p>
                Real Fell: <span>{`${feels_like.tofixed()}°`}</span>
              </p>
            </div>

            <div className="d-flex flex-col my-2">
              <Moisture size={20} />
              <p>
                Humidity: <span>{`${humidity.tofixed()}%`}</span>
              </p>
            </div>

            <div className="d-flex flex-col soace-y-2">
              <Wind size={20} />
              <p>
                Wind: <span>{`${speed.tofixed()}km/h`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------*/}

      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-col space-y-2">
          <div className="d-flex align-items-center justify-content-center my-2">
            <Sunset size={30} />
            <p>
              Rise:{" "}
              <span className="font-weight-bolder">
                {formatToLocalTime(sunrise, timezone, "hh:mm a")}
              </span>
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-center my-2">
            <Sunrise size={20} />
            <p>
              Set:{" "}
              <span className="font-weight-bolder">
                {formatToLocalTime(sunset, timezone, "hh:mm a")}
              </span>
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-center my-2">
            <ArrowDownRightSquare size={20} />
            <p>
              High: <span>{`${temp_max.tofixed()}°`}</span>
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-center my-2">
            <ArrowUpRightSquare size={20} />
            <p>
              Low: <span>{`${temp_min.tofixed()}°`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureDetails;
