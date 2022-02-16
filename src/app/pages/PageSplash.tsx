import { Box } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { AppPageProps, Page } from './Page';

interface PageSplashProps extends AppPageProps {
  splashTitle: React.ReactNode;
  children: React.ReactNode;
}

export default function PageSplash({
  splashTitle,
  children,
  ...pageProps
}: PageSplashProps) {
  return (
    <Page {...pageProps}>
      <SplashContainer id="app-splash-container">
        <Title id="app-splash-title">{splashTitle}</Title>
        <Box id="app-splash-content">{children}</Box>
      </SplashContainer>
    </Page>
  );
}

const SplashContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 220px;
  flex: 1;
  padding: ${props => props.theme.spacing(2)};
`;

const Title = styled(Box)`
  margin-top: -8vh;
  margin-bottom: ${props => props.theme.spacing(2)};
  font-weight: bold;
  font-size: 3.375rem;

  & span: {
    font-size: 3.125rem;
  }
`;
