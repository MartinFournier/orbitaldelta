import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import theme from 'styles/theme';
import { CssBaseline } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import enCA from 'date-fns/locale/en-CA';
import { LocalizationProvider } from '@mui/lab';

declare type ProviderProps = {
  children: React.ReactNode;
};

export default function AppThemeProvider({ children }: ProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <LocalizationProvider dateAdapter={DateAdapter} locale={enCA}>
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
