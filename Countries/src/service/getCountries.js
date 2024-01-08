import { BASE_URL } from "../utils/constants";

export const getAllCountries = async () => {
  try {
    const res = await fetch(`${BASE_URL}all`);
    const data = await res.json();
    if (!data) throw new Error("Something went wrong on getting countries");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCountriesWithCode = async (codes) => {
  try {
    const res = await fetch(`${BASE_URL}alpha?codes=${codes}`);
    const data = await res.json();
    if (!data) throw new Error("Something went wrong on getting country");
    return data;
  } catch (err) {
    console.log(err);
  }
};
