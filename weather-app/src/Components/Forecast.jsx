import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { iconUrlFromCode } from "../Service/Weather";

function Forecast({ title, items }) {
console.log(items)
  return (
    <Container>
      <Row>

        <Col>
          <div className="d-flex align-items-center border-bottom my-4 ">
            <p>{title}</p>
            <hr />
          </div>
        </Col>

        <Col>
          <div className=" d-flex flex-row justify-content-between">
            <div className="d-flex flex-column align-items-center">
              
              
              {items.map((items) => (
                <div className="d-flex flex-column">
                  <p className="font-weight-light">{items.title}</p>

                  <img src={iconUrlFromCode(items.icon)}
                  alt="Icon_weather"/>
                  
                  <p>{`${items.temp}°`}</p>
                </div>
              ))}
              

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Forecast;
