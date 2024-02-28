import React, { useState } from 'react';
import HeaderComponent from './App/Components/HeaderComponent';
import InputComponent from './App/Components/InputComponent';
import WeatherComponent from './App/Components/WeatherComponent';

import './App.css';
import './App/Styles/TapOff.css';

function App() {
  const [city, setCity] = useState('');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <HeaderComponent/>
      <InputComponent onCityChange={handleCityChange}/>
      <WeatherComponent city={city}/>
    </div>
  );
}

export default App;
