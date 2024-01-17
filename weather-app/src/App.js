import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

//Componenti 
import TimeLocation from './Components/TimeLocation';
import TopButton from './Components/TopButton';
import Input from './Components/Input';
import TemperatureDetails from './Components/TemperatureDetails';
import Forecast from './Components/Forecast';
import Container from 'react-bootstrap/Container';

//service
import getFormattedWeatherData from './Service/Weather'
import './App.css';


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
        <div className='App'>
          <header className="App-header">

            <TopButton></TopButton>
            <Input></Input>

            {weather && (

              <div>
                <TimeLocation weather={weather}/>
                <TemperatureDetails weather={weather}/>

                <Forecast title='Hourly Forecast' />
                <Forecast title='Daily Forecast' />
              </div>
              
            )}


          </header>
        </div>

      </Container >
    </>
  );
}

export default App;




