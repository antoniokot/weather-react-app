import React, { useState, useContext } from 'react';

import { WeatherContext } from '../../../context/WeatherContext';

import { 
  Container,
  Left,
  Right,
  WeatherIcon,
  Description,
  City,
  Short,
  Others,
  Titles,
  Statistics,
} from './styles';

export function Main() {

  const weatherContext = useContext(WeatherContext);

  return(
    <Container>
      <Left>

        <Description>
          <WeatherIcon />
          <City>{weatherContext?.cityName}</City>
          <Short>
            {
              weatherContext?.weather?.weather[0].description}, { 
              weatherContext?.weather?.main.temp 
            } °C
          </Short>
        </Description>
      </Left>

      <Right>
        <Others>
          <Titles>
            <span>Cloudiness:</span>
            <span>Humidity:</span>
            <span>Pressure:</span>
            <span>Wind:</span>
          </Titles>
          <Statistics>
            <span>{ weatherContext?.weather?.clouds.all }%</span>
            <span>66%</span>
            <span>
              { 
                weatherContext?.weather?.main.pressure ? 
                weatherContext?.weather?.main.pressure * 100 : ""
              } Pa
            </span>
            <span>{ weatherContext?.weather?.wind.speed } m/s</span>
          </Statistics>
        </Others>
      </Right>
    </Container>
  );
}