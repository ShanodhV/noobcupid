import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import { Home, Info, ContactPage } from '@mui/icons-material';
import styled from 'styled-components';
import Logo from '../Assets/NoobCupidLogo_Dark.png';

// Styled components
const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  background-color: #1c1c1c; // Dark background for navbar
`;

const NavItem = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: white;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #ff4d4d; // Change text color on hover
  }

  & .MuiSvgIcon-root {
    margin-right: 8px; // Space between icon and text
    transition: fill 0.3s; // Smooth icon color change
  }

  &:hover .MuiSvgIcon-root {
    fill: #ff4d4d; // Change icon color on hover
  }
`;

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box component="img" src={Logo} alt="NoobCupid Logo" sx={{ height: 40, marginRight: 2 }} />
        <Box flexGrow={1} />
        <NavItem component="a" href="#hero">
          <Home /> <Typography variant="body1">Home</Typography>
        </NavItem>
        <NavItem component="a" href="#about">
          <Info /> <Typography variant="body1">About Us</Typography>
        </NavItem>
        <NavItem component="a" href="#contact">
          <ContactPage /> <Typography variant="body1">Contact Us</Typography>
        </NavItem>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
