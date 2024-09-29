import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, WhatsApp, Mail } from '@mui/icons-material';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
  padding: 20px;
  background-color: #1c1c1c; // Dark footer background
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
        © 2024 NoobCupid. All rights reserved.
      </Typography>
      <Box mt={2}>
        <IconButton href="https://wa.me/your-whatsapp-number" color="inherit">
          <WhatsApp />
        </IconButton>
        <IconButton href="https://facebook.com/your-facebook-page" color="inherit">
          <Facebook />
        </IconButton>
        <IconButton href="mailto:your-email@example.com" color="inherit">
          <Mail />
        </IconButton>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
