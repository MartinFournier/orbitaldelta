import { createTheme } from '@mui/material';
import fonts from './fonts';

export const colors = {
  primary: '#c0c0de',
  secondary: '#DA4167',

  background: '#18112D',
  backgroundLight: '#20163B',
  backgroundDark: '#0F0C1D',
  paper: '#252240',

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
    bg: {
      main: colors.background,
      light: colors.backgroundLight,
      dark: colors.backgroundDark,
    },
    background: {
      default: colors.background,
      paper: colors.paper,
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
    fontFamily: fonts.main,
    fontSize: 12,

    h1: {
      fontFamily: fonts.title,
    },
    h2: {
      fontFamily: fonts.title,
    },
    h3: {
      fontFamily: fonts.title,
    },
    h4: {
      fontFamily: fonts.title,
    },
    h5: {
      fontFamily: fonts.title,
    },
    h6: {
      fontFamily: fonts.title,
    },
    prose: {
      fontFamily: fonts.prose,
    },
    code: {
      fontFamily: fonts.monospace,
    },
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        // variant: 'outlined',
      },
    },
  },
});

export default theme;
