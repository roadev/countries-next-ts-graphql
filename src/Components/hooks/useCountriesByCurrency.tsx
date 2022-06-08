import * as React from 'react';
import { useQuery } from '@apollo/client';
import apolloClient from '../../Services/apollo-client';
import { QUERY } from '../../queries';

interface Props {
  filter: string;
}

export default function useCountriesByCurrency({ filter }: Props) {
  const { data, loading, error } = useQuery(QUERY(filter));
  console.log(filter);
  console.log(data);
  return data;
}

// unused
