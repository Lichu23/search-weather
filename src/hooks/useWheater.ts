import { useState } from "react";
import { APIData, SearchWeather } from "../types/weather";
import axios from "axios";

export default function useWheater() {
  const [weather, setWeather] = useState<APIData | null>(null)

  const fetchWeather = async (search: SearchWeather) => {
    const city = encodeURIComponent(search.city);
    const country = encodeURIComponent(search.country);
    const API_KEY = import.meta.env.VITE_API_KEY
    
    try {
      const geoApi = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes&q=${country}`;
      const data = await axios(geoApi)
      const response = await data.data
      setWeather(response)
    } catch (error) {
      console.log(error)
    }
  };

  return {
    fetchWeather,
    weather
  };
}
