import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const HomePage: React.FC = () => (
  <Container sx={{
    textAlign: 'center', mt: 3, display: 'flex', flexDirection: 'column', gap: 3,
  }}
  >
    <Typography
      component="h1"
      variant="h3"
    >
      Kelionių agentūra

    </Typography>
    <Box
      sx={{
        p: 10,
        bgcolor: 'success.main',
        borderRadius: '40px',
        mt: 2,
      }}
    >
      <Box
        component="span"
        sx={{
          textAlign: 'justify', fontSize: 22, color: 'white',
        }}
      >
        Norisi pailsėti nuo darbų? Išsirink sau patinkančią šalį ir viešbutį bei susisiek su mumis!
      </Box>
      <Box
        sx={{
          textAlign: 'center', fontSize: 22, color: 'white',
        }}
      >
        Elektroniniu paštu: fainoskeliones@gmail.com arba telefonu +37063571593
      </Box>
    </Box>
  </Container>
);

export default HomePage;
