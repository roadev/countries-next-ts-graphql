import * as React from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';
import { isEmpty, isNil } from 'ramda';
import { useCountriesByFilter } from '../../queries';
import { filterByOptions, FilterByOption } from '../../Constants';
import { SerializedCountry } from '../interfaces';
import { serializeCountries } from '../../utils/serializer';
// import { sleep } from '../../utils';

interface Props {
  setCountries: (countries: SerializedCountry[]) => void;
}

export default function Searchbar({ setCountries }: Props) {
  const [filterValue, setValue] = React.useState('');
  const [filterBy, setFilterBy] = React.useState('');

  const filterStructure = React.useMemo(
    () => ({
      variables: { filter: { [filterBy]: { eq: filterValue } } },
    }),
    [filterBy, filterValue],
  );

  const shouldExecuteCall = React.useMemo(
    () =>
      (filterBy === 'continent' && filterValue.length === 2) ||
      (filterBy === 'currency' && filterValue.length === 3),
    [filterBy, filterValue],
  );

  const [executeSearch, { data }] = useCountriesByFilter();

  React.useEffect(() => {
    if (shouldExecuteCall && !isEmpty(filterBy)) {
      executeSearch({ ...filterStructure });
    }
  }, [filterValue]);

  React.useEffect(() => {
    if (!isEmpty(data) && !isNil(data)) {
      const serializedCountries: SerializedCountry[] = serializeCountries(data.countries);
      setCountries(serializedCountries);
    }
  }, [data]);

  const handleChangeFilterValue = async ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEmpty(filterBy)) {
      setValue(currentTarget.value);
    }
  };

  const handleChangeFilterBy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue('');
    setFilterBy(event.target.value);
  };

  return (
    <Grid
      component="article"
      container
      direction="row"
      justifyContent="space-between"
      xs={12}
      spacing={2}
      item
    >
      <Grid container direction="column" xs={5} item>
        <TextField
          id="search-field"
          label="Filtra país"
          data-testid="searchBar"
          type="string"
          value={filterValue}
          onChange={handleChangeFilterValue}
          variant="standard"
          disabled={isEmpty(filterBy)}
        />
      </Grid>
      <Grid container direction="column" xs={5} item>
        <TextField
          id="filter-by"
          select
          label="Filtrar por"
          value={filterBy}
          onChange={handleChangeFilterBy}
          helperText="Selecciona un filtro"
          variant="standard"
        >
          {filterByOptions.map((option: FilterByOption) => (
            <MenuItem key={option.key} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
