import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { AppBuild } from 'app/engine/AppBuild';
import NavigationPage from './NavigationPage';
import { AppPage } from '.';
import PageContainer from './PageContainer';
import { styled, Theme } from '@mui/system';

export interface PageProps extends AppPage {
  children: React.ReactNode;
  basic?: boolean;
  noSidebar?: boolean;
  showTitle?: boolean;
  noPadding?: boolean;
}

const AppFooter = styled(Box)(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1),
  fontSize: '0.8em',
  textAlign: 'center',
  backgroundColor: theme.palette.secondary.main,
  borderTop: `1px solid ${theme.palette.secondary.dark}`,
}));

const OuterWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const InnerWrapper = styled(Box)(
  ({ theme, padded = true }: { padded?: boolean; theme: Theme }) => ({
    flex: 1,
    padding: padded ? theme.spacing(2) : 0,
  }),
);

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
