import React, { useState, useEffect, useContext } from 'react';

import { Nav, SearchBar } from './styles'

import { WeatherContext, Weather, CityWeather } from '../../context/WeatherContext';

import { getWeatherByCityName } from '../../services/api';

export function Navbar() {

  const [city, setCity] = useState<string>("Campinas")
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    getCityWeather();
  }, [])
 
  function handleOnChangeCityName(event: any) {
    setCity(event.target.value);
  }

  async function getCityWeather() {
    let [weather, err] = await getWeatherByCityName(city);

    if(!weather) {
      console.log(err);
    } else {
      weatherContext?.setCityName(city);
      weatherContext?.setWeather(weather);
    }
  }

  return(
    <Nav>
      <SearchBar
        type="text"
        value={city}
        onChange={handleOnChangeCityName}
        onMouseOut={getCityWeather}
        placeholder="Find the wanted city"
      />
    </Nav>
  );
}