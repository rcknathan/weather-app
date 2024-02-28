//Imports
import React, { useState } from 'react';
import HeaderComponent from './App/Components/HeaderComponent';
import InputComponent from './App/Components/InputComponent';
import WeatherComponent from './App/Components/WeatherComponent';

//Import Style
import './App.css';
import './App/Styles/TapOff.css';

//The function is available to update this city when necessary
function App() {
  const [city, setCity] = useState('');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  //Places the created components in the main application
  return (
    <div className="App">
      <HeaderComponent/>
      <InputComponent onCityChange={handleCityChange}/>
      <WeatherComponent city={city}/>
    </div>
  );
}

export default App;
