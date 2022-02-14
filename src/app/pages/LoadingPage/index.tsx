import { Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import * as React from 'react';
import { AppPageProps } from '../Page';
import PageSplash from '../PageSplash';

export function LoadingPage(props: AppPageProps) {
  return (
    <PageSplash noSidebar splashTitle={<Title>Loading</Title>} {...props}>
      <Box sx={{ width: '400px', mt: 2 }}>
        <LinearProgress />
      </Box>
    </PageSplash>
  );
}

const Title = styled('h3')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
