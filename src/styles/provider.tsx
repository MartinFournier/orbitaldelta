import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import theme from 'styles/theme';
import { CssBaseline } from '@mui/material';

declare type ProviderProps = {
  children: React.ReactNode;
};

export default function AppThemeProvider({ children }: ProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
