import React, { useState } from 'react';
import HeaderComponent from './App/Components/HeaderComponent';
import InputComponent from './App/Components/InputComponent';

import './App.css';
import WeatherComponent from './App/Components/WeatherComponent';

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
