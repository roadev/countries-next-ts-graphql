import { gql, useLazyQuery } from '@apollo/client';

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

export function useCountriesByFilter() {
  return useLazyQuery(COUNTRIES_BY_FILTER);
}

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

export function useCountryByFilter() {
  return useLazyQuery(COUNTRY_BY_CODE);
}
