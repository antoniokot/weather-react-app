import React from 'react';

import { Container, Main } from './styles';

import { Navbar } from '../../components/navbar/index'
 
export function Home() {

  return(
    <Container >
      <Navbar />
    
      <Main />
    </Container>
  );
}