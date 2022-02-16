import { Box, LinearProgress, Typography } from '@mui/material';
import styled from 'styled-components';
import * as React from 'react';
import { AppPageProps } from '../Page';
import PageSplash from '../PageSplash';

export function LoadingPage(props: AppPageProps) {
  return (
    <PageSplash
      noSidebar
      noTopbar
      splashTitle={<Title variant="h1">Loading</Title>}
      {...props}
    >
      <Box sx={{ width: '400px', mt: 2 }}>
        <LinearProgress color="secondary" />
      </Box>
    </PageSplash>
  );
}

const Title = styled(Typography)`
  color: ${props => props.theme.palette.primary.light};
  font-weight: 700;
`;
