import { Box } from '@mui/material';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Box>
        <span>My HomePage</span>
      </Box>
    </>
  );
}
