import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',  // Enable dark theme
    primary: {
      main: '#ff4d4d', // Light red for primary actions
    },
    secondary: {
      main: '#1c1c1c', // Dark gray/black background for secondary elements
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1c1c1c', // Darker background for paper components
    },
    text: {
      primary: '#ffffff', // White text for readability
      secondary: '#ff4d4d', // Light red for emphasis
    },
  },
  typography: {
    fontFamily: 'Cascadia Code, Courier New, monospace',
    h2: {
      fontWeight: 700,
      color: '#ff4d4d', // Light red for headers
    },
    h5: {
      color: '#ffffff', // White for subheadings
    },
    button: {
      textTransform: 'none',
      fontSize: '1rem',
      color: '#ffffff', // White text for buttons
    },
  },
});

export default theme;
