import { APIData } from "../../../types/weather"

interface WeatherCardProps {
    weather:APIData | null
}
export default function WeatherCard({weather}: WeatherCardProps) {

  return (
    <div className="bg-black h-[300px] w-[400px] max-sm:w-screen rounded-md justify-center items-center">
    {!weather ? (
      <p className="text-white text-center mt-28">
        "No search has been performed yet"
      </p>
    ) : (
      <div className="flex flex-col gap-1 size-full  justify-center items-center text-white text-center">
        <h1 className="text-3xl">{weather?.location.name} Weather</h1>
        <div className="flex items-center">
          <img
            className="w-[60px] h-[60px] object-cover"
            src={weather?.current.condition.icon}
            alt=""
          />
          <p>{weather?.current.condition.text}</p>
        </div>
        <p className="text-4xl">{weather?.current.temp_c}°C</p>
        <div className="grid grid-cols-2 gap-5 mt-5 text-start">
          <p>Humidity: {weather?.current.humidity} %</p>
          <p>Precip: {weather?.current.precip_mm} mm</p>
          <p>Wind: {weather?.current.wind_kph} kph</p>
          <p>Pressure: {weather?.current.pressure_mb} mb</p>
        </div>
      </div>
    )}
  </div>
  )
}
