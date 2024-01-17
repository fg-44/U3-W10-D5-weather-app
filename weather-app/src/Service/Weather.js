import _ from 'lodash';
const { DateTime } = require("luxon");

// import { apiKey, baseURL } from './service/ApiKey'
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?';
const apiKey =  '18ad89837b9e2858246ade29a28a022d';

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// DATA YOU NEED ------------------------------------------

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(baseURL+'/'+infoType);
    url.search = new URLSearchParams({
        ...searchParams,
        appid:apiKey
    });
    return fetch(url)
    .then((res) => res.json())
    .then((data) => data) //riguarda
    .catch((error) => {
        console.error('Error fetching weather data:', error);
    });
};

const formatCurrentWeather = (data) => {
    const { coord: { lat, lon },
             main: { temp, feels_like, temp_min, temp_max, humidity },
             name,
             dt, 
             sys: { country, sunrise, sunset },
             weather,}
              = data; 

    if (!weather.length) return null;

    const {main: details, icon } = weather;

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, details, icon, sunset, weather, speed };
};

const formatForecastWeather = (data) => {

    if (!data) {
    return "Dati non validi";
    }
    let {timezone, daily, hourly} = data;
    
    daily = daily.slice(1,6).map(d => {
    return {
    title: formatToLocalTime(d.dt, timezone, 'ccc'),
    temp: d.temp.day,
    icon: d.weather[0].icon,
    };
    });
    
    hourly = hourly.slice(1, 6).map(d => {
        return {
          title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
          temp: d.temp.day,
          icon: d.weather[0].icon,
        };
        
    });

    return {timezone, daily, hourly};
};
  
const  getFormattedWeatherData  = async (searchParams) =>
 { const formattedCurrentWeather = await getWeatherData(
        'weather',
         searchParams)
         .then(formatCurrentWeather);

         const {lat, lon} = formattedCurrentWeather 

         const formattedForecastWeather = await getWeatherData ('onecall',{
         lat,
         lon, exclude: "current,minutely,alerts",
         units: searchParams.units, // change the units

     }).then (formatForecastWeather)
     
     return {...formattedCurrentWeather,...formattedForecastWeather }
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL YYYY'| Local Time: 'hh:mm a") => 
DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrlFromCode = (code) =>'http://openweathermap.org/img/wn/${code}@2x.png'; //Take icons

// DATA END -----------------------------------------------

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
