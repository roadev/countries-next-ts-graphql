import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ChooseOption from '../src/Components/ChooseOption';
import { StyledLink } from '../src/Components/Link';

const Home: NextPage = () => {
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
        <StyledLink href="/countries" noLinkStyle>
          <ChooseOption
            title="Lista de países"
            body="Aquí puedes ver la lista de país de nuestro sistema, buscar, filtrar y ver el detalle del que desees."
            img="https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_the_Union_of_South_American_Nations.svg"
            alt="Some latin american countries flags"
          />
        </StyledLink>
      </Box>
    </Container>
  );
};

export default Home;
