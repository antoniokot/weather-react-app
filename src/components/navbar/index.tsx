import React, { useState, useEffect, useContext } from 'react';

import { Nav, SearchBar } from './styles'

import { WeatherContext, Weather, CityWeather } from '../../context/WeatherContext';

import { getWeatherByCityName } from '../../services/api';

export function Navbar() {

  
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    getCityWeather()
  }, [])
 
  function handleOnChangeCityName(event: any) {
    weatherContext?.setCityName(event.target.value);
  }

  async function getCityWeather() {
    let [weather, err] = await getWeatherByCityName(weatherContext?.cityName);

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
        value={weatherContext?.cityName}
        onChange={handleOnChangeCityName}
        onMouseOut={getCityWeather}
        placeholder="Find the wanted city"
      />
    </Nav>
  );
}