import * as React from 'react';
import { TextField } from '@mui/material';

export default function Searchbar() {
  const [value, setValue] = React.useState('');

  //   const filterCountries = async () => {};

  const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(currentTarget.value);
  };

  return (
    <>
      <TextField
        id="searchField"
        test-id="searchBar"
        name="searchField"
        label="Filtra país"
        type="string"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
