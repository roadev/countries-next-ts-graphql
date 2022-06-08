import * as React from 'react';
import { Container, Box } from '@mui/material';
import CountryDetailTable from '../../src/Components/CountryDetailTable';

export default function CountryDetail() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CountryDetailTable />
      </Box>
    </Container>
  );
}
