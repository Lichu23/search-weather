import { createContext, ReactNode } from "react";
import useWheater from "../hooks/useWheater";
import { APIData, SearchWeather } from "../types/weather";

interface WeatherContextType {
  weather: APIData | null;
  fetchWeather: (search: SearchWeather) => void;
}

export const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  fetchWeather: () => {},

});

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const { weather, fetchWeather } = useWheater();

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
