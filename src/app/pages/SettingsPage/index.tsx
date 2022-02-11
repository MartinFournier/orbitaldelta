import { Box, Link } from '@mui/material';
import { Settings } from 'app/settings/Settings';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import buildInfo from 'utilities/buildInfo';

export function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>Settings</title>
        <meta name="description" content="Settings page" />
      </Helmet>
      <Box>
        <span>
          Settings - {buildInfo.version} ({buildInfo.commit}) - {new Date(buildInfo.time).toISOString()}
        </span>
      </Box>
      <Box>
        <Settings />
      </Box>
      <Link href="/">Home</Link>
    </>
  );
}
