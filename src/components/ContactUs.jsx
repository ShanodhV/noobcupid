import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styled from 'styled-components';

const ContactContainer = styled(Box)`
  padding: 50px;
  text-align: center;
`;

const ContactUs = () => {
  return (
    <ContactContainer id="contact">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Have questions or want to get in touch? Feel free to send us a message or reach out via WhatsApp or email.
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
      <Box mt={2}>
        <Typography variant="body2">
          WhatsApp: <a href="https://wa.me/your-whatsapp-number">your-whatsapp-number</a>
        </Typography>
        <Typography variant="body2">
          Email: <a href="mailto:your-email@example.com">your-email@example.com</a>
        </Typography>
      </Box>
    </ContactContainer>
  );
}

export default ContactUs;
