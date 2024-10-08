import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(
      data.sort((a, b) => a.name.common.localeCompare(b.name.common))
    );
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return {
    countries,
  };
};
