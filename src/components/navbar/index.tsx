import React, { useState, useEffect } from 'react';

import { Nav, SearchBar } from './styles'

import { getWeatherByCityName } from '../../services/api';

export function Navbar() {

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
    sys: {
      id: number,
      country: string,
      type: number,
      sunrise: number,
      sunset: number,
    },
    w: Weather[],
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
    wind: {
      speed: number,
      deg: number,
      gust: number,
    }
  }

  const [cityName, setCityName] = useState<string>("Campinas");
  const [weather, setWeather] = useState<CityWeather>();

  useEffect(() => {
    console.log(weather?.main.temp);
  }, [weather]);

  function handleOnChangeCityName(event: any) {
    setCityName(event.target.value);
  }

  function getCityWeather() {
    let { data, error } = getWeatherByCityName(cityName);

    if (error) {
      console.log(error);
    } else {
      setWeather(data);
    }
  }

  return(
    <Nav>
      <SearchBar
        type="text"
        value={cityName}
        onChange={handleOnChangeCityName}
        onMouseOut={getCityWeather}
        placeholder="Find the wanted city"
      />
    </Nav>
  );
}