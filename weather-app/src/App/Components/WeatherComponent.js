import React, { useState, useEffect } from 'react';
import RequestAPI from '../API/RequestAPI';

import '../Styles/Weather.css';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [keyToRemount, setKeyToRemount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (city.trim() !== '') {
        try {
          const data = await RequestAPI(city);
          setWeatherData(data);
          setKeyToRemount(prevKey => prevKey + 1);
        } catch (error) {
          console.error('Error setting weather data:', error);
        }
      } else {
        setWeatherData(null);
      }
    };

    fetchData();
  }, [city]);

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
