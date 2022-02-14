import { Box } from '@mui/material';
import { Page, AppPageProps } from '../Page';
import * as React from 'react';

export function GroundControlPage({ ...pageProps }: AppPageProps) {
  return (
    <Page {...pageProps}>
      <Box>Lorem Ipsum</Box>
    </Page>
  );
}
