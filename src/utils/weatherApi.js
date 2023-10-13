import axios from "axios"
const apiKey = '4b3b6bcfc5mshe6c18f342066e4fp1051d5jsne951970e518d'


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