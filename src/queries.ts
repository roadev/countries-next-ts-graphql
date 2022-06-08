import { gql, useLazyQuery } from '@apollo/client';

export const COUNTRIES_BY_CURRENCY = gql`
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
  return useLazyQuery(COUNTRIES_BY_CURRENCY);
}
