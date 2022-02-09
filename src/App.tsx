import React from 'react';

import './App.css';

import GlobalStyles from './styles/GlobalStyles';

import { Home } from './pages/home/index';

function App() {
  return (
    <div className="App">
      <Home />
      
      <GlobalStyles />
    </div>
  );
}

export default App;
