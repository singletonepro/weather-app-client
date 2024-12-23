import axios from 'axios';

const BASE_URL = 'http://localhost:8080/weather';

export const fetchWeather = async (cityName: string) => {
  if (!cityName || cityName.trim() === '') {
    throw new Error('City name is required');
  }
  const response = await axios.get(BASE_URL, {
    params: { city: cityName }, 
  });
  return response.data;
};