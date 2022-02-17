import React, { useState, createContext } from 'react';

import { getWeatherByCityName } from '../services/api';

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
  clouds: {
    all: number,
  },
  dt: number,
  wind: {
    speed: number,
    deg: number,
  }
}

interface WeatherContextInterface {
  cityName: string,
  setCityName(cityName: string): void, 
  weather: CityWeather | undefined,
  setWeather(weather: CityWeather): void, 
}

const WeatherContext = createContext<WeatherContextInterface | null>(null);

function WeatherProvider(props: any) {

  const [cityName, setCityName] = useState<string>("Campinas");
  const [weather, setWeather] = useState<CityWeather>();

  const weatherContext: WeatherContextInterface = {
    cityName: cityName,
    setCityName: setCityName, 
    weather: weather,
    setWeather: setWeather,
  };

  return (
    <WeatherContext.Provider value={ weatherContext }>
      {props.children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider }
export type { Weather, CityWeather }