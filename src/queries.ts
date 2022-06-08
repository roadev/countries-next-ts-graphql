import { gql, useLazyQuery } from '@apollo/client';

export const COUNTRIES_BY_CURRENCY = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      currency
      continent {
        name
      }
    }
  }
`;

// interface Props {
//   filter: string;
// }

export function useCountriesByCurrency() {
  return useLazyQuery(COUNTRIES_BY_CURRENCY);
}
