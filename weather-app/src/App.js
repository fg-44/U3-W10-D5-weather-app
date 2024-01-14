import 'bootstrap/dist/css/bootstrap.min.css';

//Componenti 
import TimeLocation from './Components/TimeLocation';
import TopButton from './Components/TopButton';
import Input from './Components/Input';
import TemperatureDetails from './Components/TemperatureDetails';
import Forecast from './Components/Forecast';
import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
  return (
    <>
      <Container>
        <div className='App'>
        <header className="App-header">

        <TopButton></TopButton>
        <Input></Input>
        <TimeLocation></TimeLocation>
        <TemperatureDetails></TemperatureDetails>

        <Forecast title='Hourly Forecast'/>
        <Forecast title='Daily Forecast'/>

        </header>
        </div>

      </Container >
    </>
  );
}

export default App;




