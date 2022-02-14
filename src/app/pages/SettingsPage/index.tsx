import * as React from 'react';
import { Box } from '@mui/material';
import { Page, AppPageProps } from '../Page';
import { Settings } from 'app/settings/Settings';

export function SettingsPage(props: AppPageProps) {
  return (
    <Page {...props} noPadding>
      <Box>
        <Settings />
      </Box>
    </Page>
  );
}
