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
    <Page basic {...pageProps}>
      <Wrapper>
        <Title>{splashTitle}</Title>
        {children}
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '320px',
});

const Title = styled('div')({
  marginTop: '-8vh',
  fontWeight: 'bold',
  fontSize: '3.375rem',

  '& span': {
    fontSize: '3.125rem',
  },
});
