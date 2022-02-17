import React, { useState, useEffect, useContext } from 'react';

import { Nav, SearchBar } from './styles'

import { WeatherContext, Weather, CityWeather } from '../../context/WeatherContext';

import { getWeatherByCityName } from '../../services/api';

export function Navbar() {

  const [cityName, setCityName] = useState<string>("Campinas");
  const weatherContext = useContext(WeatherContext);
 
  function handleOnChangeCityName(event: any) {
    setCityName(event.target.value);
  }

  async function getCityWeather() {
    let [weather, err] = await getWeatherByCityName(cityName);

    if(!weather) {
      console.log(err);
    } else {
      weatherContext?.setWeather(weather);
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