import axios from "axios"
//const apiKey = process.env.REACT_APP_APIKEY


const fetchWeatherAPI = async(city) => {
  
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: city},
    headers: {
      'X-RapidAPI-Key': '4b3b6bcfc5mshe6c18f342066e4fp1051d5jsne951970e518d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
} 





export {fetchWeatherAPI};