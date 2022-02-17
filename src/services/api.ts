import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5'
})

type Weather = {
  id: number,
  main: string,
  description: string,
  icon: string,
}

type CityWeather = {
  id: number, 
  cod: number,
  name: string,
  timezon: number,
  base: string,
  coord: {
    lon: number,
    lat: number,
  }
  sys: {
    id: number,
    country: string,
    type: number,
    sunrise: number,
    sunset: number,
  },
  weather: Weather[],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
    visibility: number,
  },
  cloud: {
    all: number,
  },
  dt: number,
  wind: {
    speed: number,
    deg: number,
  }
}

export async function getWeatherByCityName<CityWeather, Error>(url: string) {

  let response = await api.get("weather?appid=b77e07f479efe92156376a8b07640ced&q="+url);

  if(response.data) { 
    return [response.data, null];
  } else {
    return [response.data, new Error("Request failed")];
  }
}