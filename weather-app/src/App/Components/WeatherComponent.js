import React, { useState, useEffect } from 'react';
import RequestAPI from '../API/RequestAPI';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const city = 'Curitiba';

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
    <div>
      {weatherData ? (
        <div>
          <p>weather information from {city}</p>
          <p>temperature: {weatherData.temperature}</p>
          <p>wind: {weatherData.wind}</p>
          <p>description: {weatherData.description}</p>
        </div>
      ) : (
        <p>loading data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;