import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// https://coolors.co/18112d-252240-c0c0de-c2e0ff-efe9ec-f1b4de-da4167-d92b57-21d9a3-16a7d9
// https://bareynol.github.io/mui-theme-creator
const theme = createTheme({
  status: {
    danger: 'orange[500]',
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#c0c0de',
    },
    secondary: {
      main: '#DA4167',
    },
    background: {
      default: '#18112D',
      paper: '#252240',
    },
    success: {
      main: '#21D9A3',
    },
    text: {
      primary: '#efe9ec',
      secondary: '#c2e0ff',
    },
    warning: {
      main: '#D9A20B',
    },
    info: {
      main: '#16A7D9',
    },
    error: {
      main: '#D92B57',
    },
  },

  typography: {
    fontFamily: "'Fira Code', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 12,
  },
});

export default theme;
