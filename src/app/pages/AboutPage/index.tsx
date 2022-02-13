import { Box } from '@mui/material';
import { Page, AppPageProps } from 'app/pages/Page';
import * as React from 'react';

export function AboutPage(props: AppPageProps) {
  return (
    <Page {...props}>
      <Box>
        <Box sx={{ my: 4 }}>Lorem Ipsum</Box>
      </Box>
    </Page>
  );
}
