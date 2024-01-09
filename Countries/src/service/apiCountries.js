import { BASE_URL } from "../utils/constants";

const fields =
  "fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders";

export const getCountries = async (text = "", region = "") => {
  const url = region
    ? `${BASE_URL}region/${region}?${fields}`
    : text
    ? `${BASE_URL}name/${text}?${fields}`
    : `${BASE_URL}all?${fields}`;
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
