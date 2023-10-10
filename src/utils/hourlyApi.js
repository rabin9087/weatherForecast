import axios from "axios"
const apiKey = process.env.REACT_APP_APIKEY

const hourlyApi = async(lat, lon) => {
    // const options = {
    //   method: 'GET',
    //   url: 'https://easy-weather1.p.rapidapi.com/hourly/48',
    //   params: {
    //     latitude: lat,
    //     longitude: lon
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '4b3b6bcfc5mshe6c18f342066e4fp1051d5jsne951970e518d',
    //     'X-RapidAPI-Host': 'easy-weather1.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  }
  export {hourlyApi};