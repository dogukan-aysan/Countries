import { BASE_URL } from "../utils/constants";

export const getCountries = async (text) => {
  const url = text
    ? `${BASE_URL}name/${text}?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders`
    : `${BASE_URL}all?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data) throw new Error("Something went wrong on getting country");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCountriesWithCode = async (codes) => {
  try {
    const res = await fetch(`${BASE_URL}alpha?codes=${codes};fields=name`);
    const data = await res.json();
    if (!data) throw new Error("Something went wrong on getting country");
    return data;
  } catch (err) {
    console.log(err);
  }
};
