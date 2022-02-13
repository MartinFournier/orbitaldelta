import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { AppBuild } from 'app/engine/AppBuild';
import NavigationPage from './NavigationPage';
import { AppPage } from '.';
import PageContainer from './PageContainer';

export interface PageProps extends AppPage {
  children: React.ReactNode;
  basic?: boolean;
  noSidebar?: boolean;
}

export declare type AppPageProps = Omit<PageProps, 'children'>;

function InnerPage(props: PageProps) {
  return props.basic ? (
    <>{props.children}</>
  ) : (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {props.title}
      </Typography>
      {props.children}
      <Box sx={{ mt: 2, fontSize: '0.8em' }}>
        <AppBuild />
      </Box>
    </>
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
        <PageContainer>{props.children}</PageContainer>
      ) : (
        <NavigationPage>
          <InnerPage {...props} />
        </NavigationPage>
      )}
    </>
  );
}
