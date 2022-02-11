import { Box } from '@mui/material';
import { AppLink } from 'app/common/AppLink';
import { Settings } from 'app/settings/Settings';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>Settings</title>
        <meta name="description" content="Settings page" />
      </Helmet>
      <Box>
        <Settings />
      </Box>
      <AppLink to="/">Home</AppLink>
    </>
  );
}
