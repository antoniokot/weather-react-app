import React from 'react';

import { 
  Container,
  Left,
  Right,
  WeatherIcon,
  Description,
  City,
  Short,
  Others,
  Cloudiness,
  Humidity,
  Pressure,
  Wind,
  Title,
} from './styles';

export function Main() {

  return(
    <Container>
      <Left>
        <WeatherIcon />

        <Description>
          <City>Betel</City>
          <Short>Nublado, 28 °C</Short>
        </Description>
      </Left>

      <Right>
        <Others>
          <Cloudiness>
            <Title>Cloudiness</Title>
            60%
          </Cloudiness>
          <Humidity>
            <Title>Humidity</Title>
            66%
          </Humidity>
          <Pressure>
            <Title>Pressure</Title>
            100900 Pa
          </Pressure>
          <Wind>
            <Title>Wind</Title>
            3,5 m/s
          </Wind>
        </Others>
      </Right>
    </Container>
  );
}