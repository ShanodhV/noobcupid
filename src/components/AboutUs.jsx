import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Web, PhoneIphone, Code } from '@mui/icons-material';
import styled from 'styled-components';

const AboutContainer = styled(Box)`
  padding: 50px;
  text-align: center;
  background-color: #121212; // Dark background for the section
`;

const StyledCard = styled(Card)`
  border: 2px solid #ff4d4d; // Dynamic outline
  border-radius: 10px;
  padding: 20px;
  background-color: #1c1c1c; // Dark background for the card
  color: white; // Light text for contrast
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Subtle shadow for card elevation
`;

const CardIcon = styled(Box)`
  font-size: 2.5rem;
  color: #ff4d4d; // Icon color
  margin-bottom: 10px;
`;

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <Typography variant="h4" gutterBottom>
        About NoobCupid
      </Typography>
      <Typography variant="body1" paragraph>
        NoobCupid is a cutting-edge software development company dedicated to creating innovative solutions that connect people and technology. Our team of passionate developers is committed to building software that makes a difference.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <CardIcon>
                <Web />
              </CardIcon>
              <Typography variant="h6">Web Applications</Typography>
              <Typography variant="body2">
                We build dynamic and responsive web applications tailored to your business needs.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <CardIcon>
                <PhoneIphone />
              </CardIcon>
              <Typography variant="h6">Mobile Apps</Typography>
              <Typography variant="body2">
                Our mobile apps are designed to provide a seamless experience on both iOS and Android platforms.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <CardIcon>
                <Code />
              </CardIcon>
              <Typography variant="h6">Software Solutions</Typography>
              <Typography variant="body2">
                We offer custom software solutions to optimize and enhance your business processes.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </AboutContainer>
  );
}

export default AboutUs;
