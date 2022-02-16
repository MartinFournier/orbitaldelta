import { Box } from '@mui/material';
import { Page, AppPageProps } from '../Page';
import { SaveGameButton } from 'app/engine/SaveGameButton';
import { PlayerName } from 'app/player/PlayerName';
import * as React from 'react';

interface MissionControlProps extends AppPageProps {
  saveFn: () => Promise<unknown>;
}

export function MissionControlPage({
  saveFn,
  ...pageProps
}: MissionControlProps) {
  return (
    <Page {...pageProps}>
      <Box>
        <Box>
          <PlayerName />
        </Box>
        <Box sx={{ my: 4 }}>
          <SaveGameButton saveFn={saveFn} size="large" />
        </Box>
      </Box>
    </Page>
  );
}