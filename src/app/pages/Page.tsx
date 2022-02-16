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
  noPadding?: boolean;
  noSidebar?: boolean;
  noTopbar?: boolean;
}

const StyledFooter = styled(Box)`
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
  flex: 1;
  max-height: 100vh;
`;

const InnerWrapper = styled(Box)`
  flex: 1;
  display: flex;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.palette.secondary.main}
    ${props => props.theme.palette.bg.light};
`;

const TopBar = styled(Box)`
  background-color: ${props => props.theme.palette.primary.dark};
  border-bottom: 1px solid ${props => props.theme.palette.primary.light};
  color: ${props => props.theme.palette.bg.dark};
  padding: ${props => props.theme.spacing(1)};
  font-weight: 500;
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

function InnerPage({ children, noTopbar = false }: PageProps) {
  return (
    <OuterWrapper id="app-page">
      {!noTopbar && (
        <TopBar id="app-top-bar">
          <Typography variant="code">Lorem Ipsum</Typography>
        </TopBar>
      )}
      <InnerWrapper id="app-content">{children}</InnerWrapper>
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
