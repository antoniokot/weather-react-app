import React, { useState } from 'react';

import { Nav, SearchBar } from './styles'

export function Navbar() {

  const [cityName, setCityName] = useState("Campinas");

  function handleOnChangeCityName(event: any) {
    setCityName(event.target.value);
    console.log(cityName);
  }

  return(
    <Nav>
      <SearchBar
        type="text"
        value={cityName}
        onChange={handleOnChangeCityName}
        placeholder="Find the wanted city"
      />
    </Nav>
  );
}