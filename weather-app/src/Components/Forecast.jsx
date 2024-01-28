import React from "react";
import { iconUrlFromCode } from "../Service/Weather";

function Forecast({ title, items }) {
console.log(items)
  return (
    <div className="container">
      <div className="row">

        <div className="row">
          <div className="d-flex align-items-center border-bottom my-4 ">
            <p>{title}</p>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className=" d-flex flex-row justify-content-between">
            <div className="d-flex flex-column align-items-center">
              
              {/*
              {items.map((items) => (
                <div className="d-flex flex-column">
                  <p className="font-weight-light">{items.title}</p>

                  <img src={iconUrlFromCode(item.icon)}
                  alt="Icon_weather"/>
                  
                  <p>{`${items.temp}°`}</p>
                </div>
              ))}
              */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
