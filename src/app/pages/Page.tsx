import { Box, Typography } from '@mui/material';
import { AppBuild } from 'app/engine/AppBuild';
import NavigationPage from 'app/navigation/NavigationPage';
import { AppPage } from 'app/navigation/pages';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export interface PageProps extends AppPage {
  children: React.ReactNode;
  basic?: boolean;
}

export declare type AppPageProps = Omit<PageProps, 'children'>;

export function Page(props: PageProps) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description ?? props.title} />
      </Helmet>
      <NavigationPage>
        {props.basic ? (
          props.children
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
        )}
      </NavigationPage>
    </>
  );
}
