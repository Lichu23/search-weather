import { useContext } from "react";
import Form from "./components/WeatherForm";
import { WeatherContext } from "../../context/context";
import WeatherCard from "./components/WeatherCard";

export default function Weather() {
  const { weather, fetchWeather } = useContext(WeatherContext);

  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col max-md:gap-10 gap-16 justify-center items-center mt-28 max-md:mt-8 ">
        <h1 className="font-bold text-6xl max-md:text-4xl">Weather Finder</h1>

        <div className="max-md:flex-col flex max-md:gap-9 gap-10">
          <Form fetchWeather={fetchWeather} />

          <WeatherCard weather={weather} />
        </div>
      </div>
    </main>
  );
}
