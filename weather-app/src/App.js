import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

//Componenti 
import TimeLocation from './Components/TimeLocation';
import TopButton from './Components/TopButton';
import Input from './Components/Input';
import TemperatureDetails from './Components/TemperatureDetails';
import Forecast from './Components/Forecast';


//service
import getFormattedWeatherData from './Service/Weather'



function App() {

  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units})
             .then((data) => {
             setWeather(data);
        });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <Container>
        <Row className="App">
          <Col className="App-header">

            <TopButton setQuery={setQuery}/>
            <Input setQuery={setQuery} units={units} setUnits={setUnits} />

            {weather && (

              <div>
                <TimeLocation weather={weather}/>
                <TemperatureDetails weather={weather}/>

                <Forecast title='Hourly Forecast' items={weather.hourly}/>
                <Forecast title='Daily Forecast' items={weather.daily}/>
                
              </div>
              
            )}


          </Col>
        </Row>

      </Container >
    </>
  );
}

export default App;




