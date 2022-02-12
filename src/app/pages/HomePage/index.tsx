import { Box } from '@mui/material';
import { Page } from 'app/common/Page';
import { SaveGameButton } from 'app/engine/SaveGameButton';
import { PlayerName } from 'app/player/PlayerName';
import * as React from 'react';

declare type HomeProps = {
  saveFn: () => Promise<unknown>;
};

export function HomePage({ saveFn }: HomeProps) {
  return (
    <Page title="Home Page">
      <Box>
        <PlayerName />
        <SaveGameButton saveFn={saveFn} />
      </Box>
    </Page>
  );
}
