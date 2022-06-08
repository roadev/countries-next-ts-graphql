import * as React from 'react';
import { Container } from '@mui/material';
import { isNil } from 'ramda';
import Searchbar from '../src/Components/Searchbar';
import CountriesTable from '../src/Components/CountriesTable';

export default function Countries() {
  const [countries, setCountries] = React.useState([]);

  return (
    <>
      <header>
        <h1>Custom header</h1>
      </header>
      <Container component="section">
        <Searchbar setCountries={setCountries} />
        {!isNil(countries) && <CountriesTable countries={countries} />}
      </Container>
    </>
  );
}
