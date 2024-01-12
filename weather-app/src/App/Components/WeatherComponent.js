import React, { useState, useEffect } from 'react';
import RequestAPI from '../API/RequestAPI';

import '../Styles/Weather.css';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await RequestAPI(city);
        setWeatherData(data);
      } catch (error) {
        console.error('Error setting weather data:', error);
        throw error;
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className='div-weather'>
      {weatherData ? (
        <div className='div-data'>
          <p className='temperature'>{weatherData.temperature}</p>
          <p className='details'>{city}</p>
          <p className='details'>{weatherData.wind}</p>
          <p className='details'>{weatherData.description}</p>
        </div>
      ) : (
        <p className='loading'>Waiting City...</p>
      )}
    </div>
  );
};

export default WeatherComponent;