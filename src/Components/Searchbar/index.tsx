import * as React from 'react';
import { MenuItem, TextField } from '@mui/material';
import { isEmpty } from 'ramda';
import { useCountriesByCurrency } from '../../queries';
import { filterByOptions, FilterByOption } from '../../Constants';
// import { sleep } from '../../utils';

export default function Searchbar() {
  const [filterValue, setValue] = React.useState('');
  const [filterBy, setFilterBy] = React.useState('');

  const filterStructure = React.useMemo(
    () => ({
      variables: { filter: { [filterBy]: { eq: filterValue } } },
    }),
    [filterBy, filterValue],
  );

  const [executeSearch, { data, loading, error }] = useCountriesByCurrency();

  console.log('filterValue', filterValue);

  console.log('******', data);

  React.useEffect(() => {
    if (filterValue.length > 2 && !isEmpty(filterBy)) {
      console.log('inside', filterStructure);
      executeSearch({ ...filterStructure });
    }
  }, [filterValue]);

  const handleChangeFilterValue = async ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEmpty(filterBy)) {
      setValue(currentTarget.value);
    }
  };

  const handleChangeFilterBy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterBy(event.target.value);
  };

  return (
    <>
      <TextField
        id="search-field"
        data-testid="searchBar"
        type="string"
        value={filterValue}
        onChange={handleChangeFilterValue}
        variant="standard"
        disabled={isEmpty(filterBy)}
      />

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
    </>
  );
}
