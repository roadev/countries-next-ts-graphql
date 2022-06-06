import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Link from '../src/Link';
// import ProTip from '../src/ProTip';
// import Copyright from '../src/Copyright';
import ChooseOption from '../src/Components/ChooseOption';
import countriesImg from '../src/Assets/countries.jpg';

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
        <ChooseOption
          title="Lista de países"
          body="Aquí puedes ver la lista de país de nuestro sistema, buscar, filtrar y ver el detalle del que desees."
          img="https://upload.wikimedia.org/wikipedia/cfommons/thumb/5/50/Flag_of_the_Union_of_South_American_Nations.svg/1280px-Flag_of_the_Union_of_South_American_Nations.svg.png"
          alt="Some latin american countries flags"
        />
        {/* <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright /> */}
      </Box>
    </Container>
  );
};

export default Home;
