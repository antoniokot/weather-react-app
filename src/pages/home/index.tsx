import React from 'react';

import { Container } from './styles';

import { Navbar } from '../../components/navbar/index'
import { Main } from './main/index';
 
export function Home() {

  return(
    <Container >
      <Navbar />
    
      <Main />
    </Container>
  );
}