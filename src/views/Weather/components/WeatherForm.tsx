import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../../constants/countries";
import { SearchWeather } from "../../../types/weather";
import Alert from "./Alert";

interface FormProps {
  fetchWeather: (search: SearchWeather) => void;
}

export default function Form({ fetchWeather }: FormProps) {
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState<SearchWeather>({
    city: "",
    country: "",
  });

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setIsError(true);
      return;
    }
    fetchWeather(search);
    setIsError(false);
  };

  return (
    <div className="flex  justify-center items-center max-md:w-full w-[300px] max-md:h-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        

        <label htmlFor="">City</label>
        <input
          autoFocus
          id="city"
          name="city"
          onChange={handleChange}
          value={search.city}
          className={`px-1 border-2 rounded-md ${isError ? "border-2 border-rose-600" : ""}`}
        />
        {isError ? <Alert /> : ""}

        <label htmlFor="country">Country</label>
        <select
          value={search.country}
          id="country"
          name="country"
          onChange={handleChange}
          className={`border-2 rounded-md text-center ${isError ? "border-2 border-rose-600" : ""}`}
        >
          <option value="">---Select a Country---</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        {isError ? <Alert /> : ""}
        <button className="border rounded-xl p-2 hover:bg-gray-950 hover:text-white">Search weather</button>
      </form>
    </div>
  );
}
