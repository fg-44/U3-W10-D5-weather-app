const { DateTime } = require("luxon");

// DATA YOU NEED ------------------------------------------

const getWeatherData = async (infoType, searchParams) => {

  const baseURL = "https://api.openweathermap.org/data/2.5";
  const apiKey = "18ad89837b9e2858246ade29a28a022d";

  const url = new URL(baseURL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: apiKey,
  });
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data) //riguarda
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon } = data.coord,
    main: { temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: {speed}
  } = data;

  if (!weather.length) return null;

  const {main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    details,
    icon,
    sunset,
    weather,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  if (!data) {
      return "Dati non validi";
  }

  daily = [];
  if (!daily) {
      return "Dati non validi";
  }

  hourly = [];
  if (!hourly) {
      return "Dati non validi";
  }

  daily = daily.slice(1, 6).map(d => {
      return {
          title: formatToLocalTime(d.dt, timezone, "ccc"),
          temp: d.temp.day,
          icon: d.weather[0].icon
      };
  });

  if (!hourly) {
      return "Dati non validi";
  }

  hourly = hourly.slice(1, 6).map(d => {
      return {
          title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
          temp: d.temp,
          icon: d.weather[0].icon
      };
  });

  return { timezone, daily, hourly };
};
  

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units, // change the units
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, LLL dd yyyy '| Local Time: 'hh:mm a"
) => {
  const dt = DateTime.fromSeconds(secs).setZone(zone)
  const formattedDate = dt.toFormat(format);
  return formattedDate;
}


const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`; // icons

// DATA END -----------------------------------------------

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
