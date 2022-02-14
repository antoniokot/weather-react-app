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
  Titles,
  Statistics,
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

        <Description>
          <WeatherIcon />
          <City>Betel</City>
          <Short>Nublado, 28 °C</Short>
        </Description>
      </Left>

      <Right>
        <Others>
          <Titles>
            <Title>Cloudiness:</Title>
            <Title>Humidity:</Title>
            <Title>Pressure:</Title>
            <Title>Wind:</Title>
          </Titles>
          <Statistics>
            <Cloudiness>60%</Cloudiness>
            <Humidity>66%</Humidity>
            <Pressure>100900 Pa</Pressure>
            <Wind>3,5 m/s</Wind>
          </Statistics>
        </Others>
      </Right>
    </Container>
  );
}