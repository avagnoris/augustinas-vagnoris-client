import React from 'react';
import NavbarLink from './navbar-link';

const NavbarVisitorMenu: React.FC = () => (
  <>
    <NavbarLink to="/auth/login">Prisijungti</NavbarLink>
    <NavbarLink to="/auth/register">Registracija</NavbarLink>
  </>
);

export default NavbarVisitorMenu;
