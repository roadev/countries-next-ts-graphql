import * as React from 'react';
import { useRouter } from 'next/router';
import { isEmpty, isNil } from 'ramda';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import { useCountryByFilter } from '../../queries';
import { SingleCountry, DetailList, Language } from '../interfaces';

export default function CountryDetailTable(): JSX.Element {
  const router = useRouter();
  const { code } = router.query;
  const [executeSearch, { data }] = useCountryByFilter();

  const filterStructure = React.useMemo(
    () => ({
      variables: { code },
    }),
    [code],
  );

  const detailsList = ({
    code,
    currency,
    continent,
    languages,
    capital,
  }: SingleCountry): DetailList[] => [
    { title: 'Código', detail: code },
    { title: 'Moneda', detail: currency },
    { title: 'Continente', detail: continent.name },
    { title: 'Idiomas', detail: languages.map((lang: Language) => lang.name).join(' ') },
    { title: 'Capital', detail: capital },
  ];

  const getFormattedItemText = (item: DetailList) => (
    <>
      <Typography variant="h6">{item.title}: </Typography>
      <Typography>{item.detail}</Typography>
    </>
  );

  const getTitle = (name: string) => (
    <header>
      <h1>{name}</h1>
    </header>
  );

  React.useEffect(() => {
    if (!isNil(code)) {
      executeSearch({ ...filterStructure });
    }
  }, [code]);

  return !isNil(data) && !isEmpty(data) ? (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{data.country.emoji}</ListItemIcon>
          <ListItemText primary={getTitle(data.country.name)} />
        </ListItemButton>
      </ListItem>
      {detailsList(data.country).map((detailList) => (
        <ListItem disablePadding key={detailList.detail}>
          <ListItemButton sx={{ fontSize: '2rem' }}>
            <ListItemText inset primary={getFormattedItemText(detailList)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  ) : null;
}
