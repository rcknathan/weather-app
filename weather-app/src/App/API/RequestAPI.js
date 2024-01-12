const RequestAPI = async (city) => {
    try {
      const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting weather data:', error);
      throw error;
    }
  };
  
  export default RequestAPI;