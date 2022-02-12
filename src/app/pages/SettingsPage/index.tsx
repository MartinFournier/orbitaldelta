import * as React from 'react';
import { Box } from '@mui/material';
import { Page } from 'app/common/Page';
import { Settings } from 'app/settings/Settings';

export function SettingsPage() {
  return (
    <Page title="Settings">
      <Box>
        <Settings />
      </Box>
    </Page>
  );
}
