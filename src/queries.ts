import { gql, useLazyQuery } from '@apollo/client';

// filters countries by given filter object, returns an array
// with matching results
const COUNTRIES_BY_FILTER = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      currency
      code
      emoji
      continent {
        name
      }
    }
  }
`;

// custom useLazyQuery to call with filter
export function useCountriesByFilter() {
  return useLazyQuery(COUNTRIES_BY_FILTER);
}

// filters country by given code, returns an object with matched result
const COUNTRY_BY_CODE = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      currency
      code
      emoji
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
  }
`;

// custom useLazyQuery to call with filter
export function useCountryByFilter() {
  return useLazyQuery(COUNTRY_BY_CODE);
}
