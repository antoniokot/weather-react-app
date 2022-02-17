import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import { WeatherProvider } from './context/WeatherContext';

import { Home } from './pages/home/index';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Home />
        
        <GlobalStyles />
      </div>
    </WeatherProvider>
  );
}

export default App;
