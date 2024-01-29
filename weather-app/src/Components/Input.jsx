
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Search, Compass } from "react-bootstrap-icons";

/* SEZIONE RICERCA E BOTTONI (DONE) */

function Input({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLoationClick = () => {
    if (Navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handUnitsClick = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit ) setUnits(selectedUnit);
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex flex-row justify-content-center my-5">
          <div>
            <div className="d.flex item-center flex-row justify-content-center">
              <input
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                type="text"
                placeholder="Search your city...."
                className="font-light"
              />
            </div>
          </div>

          <div className="row">
            <div className="d-flex flex-row justify-content-center">
              <div>
                <Button
                  className="bg-transparent border-0"
                  onClick={handleSearchClick}
                >
                  <Search size={20} />
                </Button>
                <Button
                  className="bg-transparent border-0"
                  onClick={handleLoationClick}
                >
                  <Compass size={20}></Compass>
                </Button>
              </div>
              <div className="d-flex item-center justify-content-center">
                <Button
                  name="metric"
                  className="bg-transparent border-0"
                  onClick={handUnitsClick}
                >
                  C
                </Button>
                <p>|</p>
                <Button
                  name="imperial"
                  className="bg-transparent border-0"
                  onClick={handUnitsClick}
                >
                  F
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Input;
