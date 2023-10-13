import axios from "axios"
const apiKey = process.env.REACT_APP_APIKEY


const fetchWeatherAPI = async(city) => {
  
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: city},
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data
  } catch (error) {
    console.error(error);
  }
} 

const fetchWeatherByLocation = async(city) => {
  const options = {
    method: 'GET',
    url: `https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/hourly/`,
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {fetchWeatherAPI, fetchWeatherByLocation};