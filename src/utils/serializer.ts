import { Country, SerializedCountry } from '../Components/interfaces';

export const serializeCountries = (countries: Country[]): SerializedCountry[] => {
  return countries.map((country) => ({
    ...country,
    continent: country.continent.name,
  }));
};
