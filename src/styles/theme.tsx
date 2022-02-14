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

const colors = {
  primary: '#c0c0de',
  secondary: '#DA4167',

  background: '#18112D',
  well: '#252240',

  textPrimary: '#efe9ec',
  textSecondary: '#c2e0ff',

  success: '#21D9A3',
  warning: '#D9A20B',
  info: '#16A7D9',
  error: '#D92B57',
};

// https://coolors.co/18112d-252240-c0c0de-c2e0ff-efe9ec-f1b4de-da4167-d92b57-21d9a3-16a7d9
// https://bareynol.github.io/mui-theme-creator
const theme = createTheme({
  status: {
    danger: 'orange[500]',
  },

  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.well,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    error: {
      main: colors.error,
    },
  },

  typography: {
    fontFamily: "'Fira Code', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 12,
  },
});

export default theme;
