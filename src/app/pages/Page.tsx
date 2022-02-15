import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { AppBuild } from 'app/engine/AppBuild';
import NavigationPage from './NavigationPage';
import { AppPage } from '.';
import PageContainer from './PageContainer';
import styled from 'styled-components';

export interface PageProps extends AppPage {
  children: React.ReactNode;
  basic?: boolean;
  noSidebar?: boolean;
  noPadding?: boolean;
}

const StyledFooter = styled(Box)`
  margin-top: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(1)};
  font-size: 0.8em;
  text-align: center;
  background-color: ${props => props.theme.palette.bg.dark};
  border-top: 1px solid ${props => props.theme.palette.bg.light};
  color: ${props => props.theme.palette.primary.dark};
`;

const OuterWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const InnerWrapper = styled(Box)<{ noPadding: boolean }>`
  flex: 1;
  display: flex;
  padding: ${props => (props.noPadding ? 0 : props.theme.spacing(2))};
`;

export declare type AppPageProps = Omit<PageProps, 'children'>;

function AppFooter() {
  return (
    <StyledFooter id="app-footer">
      <Typography variant="code">
        <strong>Orbital Δ</strong> - <AppBuild />
      </Typography>
    </StyledFooter>
  );
}

function InnerPage({ children, noPadding = false }: PageProps) {
  return (
    <OuterWrapper id="app-page-wrapper">
      <InnerWrapper id="app-page-content" noPadding={noPadding}>
        {children}
      </InnerWrapper>
      <AppFooter />
    </OuterWrapper>
  );
}

function PageFullscreen(props: PageProps) {
  return (
    <PageContainer noPadding>
      <InnerPage {...props} />
    </PageContainer>
  );
}

function PageWithMenu(props: PageProps) {
  return (
    <NavigationPage>
      <PageContainer noPadding>
        <InnerPage {...props} />
      </PageContainer>
    </NavigationPage>
  );
}

export function Page(props: PageProps) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description ?? props.title} />
      </Helmet>
      {props.noSidebar ? (
        <PageFullscreen {...props} />
      ) : (
        <PageWithMenu {...props} />
      )}
    </>
  );
}
