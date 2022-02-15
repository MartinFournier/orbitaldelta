import { Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { AppPageProps } from '../Page';
import PageSplash from '../PageSplash';

export function NotFoundPage(props: AppPageProps) {
  const splashTitle = <Typography variant="h1">404</Typography>;
  return (
    <PageSplash {...props} splashTitle={splashTitle}>
      <P variant="subtitle1">Page not found.</P>
    </PageSplash>
  );
}

const P = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.625rem 0 1.5rem 0;
`;
