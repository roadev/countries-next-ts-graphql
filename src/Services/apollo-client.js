import { ApolloClient, InMemoryCache } from '@apollo/client';

// creates a client instance for Apollo client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export default client;
