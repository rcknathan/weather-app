//Makes the API data request
const RequestAPI = async (city) => {
    try {
      const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`); //Note that the city to be inserted in the API link is a variable to be passed
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting weather data:', error);
      alert('Error loading weather data: Unable to access API, you may face this problem sometimes. Please, reload the page and try again.');
    }
  };
  
  export default RequestAPI;