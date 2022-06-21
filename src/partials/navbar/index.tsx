import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
} from '@mui/material';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootSelector } from '../../store/hooks';
import { selectAuthLoggedIn } from '../../store/selectors';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectAuthLoggedIn);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'success.main' }}>
      <Container>
        <Toolbar sx={{
          px: { xs: 0, sm: 0 },
          justifyContent: 'space-between',
        }}
        >
          <Box>
            <NavbarLink to="/">Pagrindinis</NavbarLink>
          </Box>
          <Box>
            <NavbarLink to="/turkey">Turkija</NavbarLink>
          </Box>
          <Box>
            <NavbarLink to="/greece">Graikija</NavbarLink>
          </Box>
          <Box>
            <NavbarLink to="/italy">Italija</NavbarLink>
          </Box>
          <Box>
            <NavbarLink to="/spain">Ispanija</NavbarLink>
          </Box>
          <Box sx={{ display: 'flex' }}>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
