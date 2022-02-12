import { Box, Typography } from '@mui/material';
import { AppBuild } from 'app/engine/AppBuild';
import NavigationPage from 'app/navigation/NavigationPage';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

declare type PageProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Page(props: PageProps) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description ?? props.title} />
      </Helmet>
      <NavigationPage>
        <>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {props.title}
          </Typography>
          {props.children}
          <Box sx={{ mt: 2, fontSize: '0.8em' }}>
            <AppBuild />
          </Box>
        </>
      </NavigationPage>
    </>
  );
}
