//Imports
import React, { useState, useEffect } from 'react';
import RequestAPI from '../API/RequestAPI';

//Import Style
import '../Styles/Weather.css';

//Receives the value of the city entered by the user and generates its data fed by the API
const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [keyToRemount, setKeyToRemount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (city.trim() !== '') {
        try {
          const data = await RequestAPI(city);
          setWeatherData(data);
          setKeyToRemount(prevKey => prevKey + 1); //Key to reassemble the div-weather by reactivating the animation on each search
        } catch (error) {
          console.error('Error setting weather data:', error);
        }
      } else {
        setWeatherData(null);
      }
    };

    fetchData();
  }, [city]);
  //Returns the obtained data materialized by CSS
  return (
    <div key={keyToRemount} className={`div-weather`}>
      {weatherData && (
        <div className='div-data'>
          <p className='temperature'>{weatherData.temperature}</p>
          <p className='details'>{city}</p>
          <p className='details'>{weatherData.wind}</p>
          <p className='details'>{weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
