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
  showTitle?: boolean;
  noPadding?: boolean;
}

const AppFooter = styled(Box)`
  margin-top: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(1)};
  font-size: 0.8em;
  text-align: center;
  background-color: ${props => props.theme.palette.secondary.main};
  border-top: 1px solid ${props => props.theme.palette.secondary.dark};
`;

const OuterWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InnerWrapper = styled(Box)<{ padded: boolean }>`
  flex: 1;
  padding: ${props => (props.padded ? props.theme.spacing(2) : 0)};
`;

export declare type AppPageProps = Omit<PageProps, 'children'>;

function InnerPage(props: PageProps) {
  return props.basic ? (
    <>{props.children}</>
  ) : (
    <OuterWrapper>
      <InnerWrapper padded={!props.noPadding}>
        {props.showTitle && (
          <Typography variant="h4" sx={{ mb: 2 }}>
            {props.title}
          </Typography>
        )}
        {props.children}
      </InnerWrapper>
      <AppFooter>
        <strong>Orbital Δ</strong> - <AppBuild />
      </AppFooter>
    </OuterWrapper>
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
        <PageContainer noPadding={props.noPadding}>
          {props.children}
        </PageContainer>
      ) : (
        <NavigationPage>
          <PageContainer noPadding>
            <InnerPage {...props} />
          </PageContainer>
        </NavigationPage>
      )}
    </>
  );
}
